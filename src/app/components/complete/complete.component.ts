import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormService } from '../../service/form.service';
import { log } from 'console';
import { CommonModule } from '@angular/common';
import { Addon } from '../../interface/addon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-complete',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink],
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.css',
})
export class CompleteComponent implements OnInit {
  plan: any;
  plantype!: string;
  selectedAndon: Addon[] = [];
  constructor(private formservice: FormService) {}
  ngOnInit(): void {
    this.plan = this.formservice.planOption();
    this.plantype = this.formservice.planType();
    this.selectedAndon = this.formservice.selectedAddOn();
  }
}
