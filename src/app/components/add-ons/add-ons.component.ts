import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Addon } from '../../interface/addon';
import { FormService } from '../../service/form.service';
import { log } from 'console';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [NavbarComponent, CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css',
})
export class AddOnsComponent implements OnInit {
  plan = '';
  data: Addon[] = [];
  selectedAddOns: Addon[] = [];
  constructor(private formService: FormService) {
    this.plan = this.formService.planType();
    console.log(this.plan);
  }
  ngOnInit() {
    this.formService.getAddOns().subscribe({
      next: (res) => {
        this.data = res;
        this.selectedAddOns = this.data.filter(
          (dat) => dat.isSelected === true
        );
      },
    });
  }

  selectedAddOn(index: number) {
    if (index && index < this.data.length) {
      this.data[index].isSelected = !this.data[index].isSelected;
    }
    if (this.data[index].isSelected === true) {
      this.selectedAddOns.push(this.data[index]);
    }
    if (this.data[index].isSelected === false) {
      const itemIndex = this.selectedAddOns.findIndex(
        (item) => item === this.data[index]
      );
      this.selectedAddOns.splice(itemIndex, 1);
    }
    this.formService.selectedAddOn.set(this.selectedAddOns);
  }
}
