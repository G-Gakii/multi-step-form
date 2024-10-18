import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Data } from '../../interface/data';
import { FormService } from '../../service/form.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { log } from 'node:console';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [NavbarComponent, NgOptimizedImage, CommonModule, RouterLink],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
})
export class PlanComponent implements OnInit {
  plans: Data[] = [];
  plantype = 'monthly';
  planOption = {};
  constructor(private formService: FormService) {}
  ngOnInit(): void {
    this.formService.getData().subscribe({
      next: (res) => {
        this.plans = res;

        this.planOption = this.plans[0];
        this.formService.planOption.set(this.planOption);
        console.log(this.formService.planOption());
      },
    });
  }
  changePlan() {
    this.plantype = this.plantype === 'monthly' ? 'yearly' : 'monthly';
    this.formService.planType.set(this.plantype);
    console.log(this.plantype);
  }
  choosePlan(index: number) {
    for (let i = 0; i < this.plans.length; i++) {
      this.plans[i].isPlan = false;
      if (i === index) {
        this.plans[i].isPlan = true;
        this.planOption = this.plans[i];

        this.formService.planOption.set(this.planOption);
        console.log(this.formService.planOption());
      }
    }
  }
}
