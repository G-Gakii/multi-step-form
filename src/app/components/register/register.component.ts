import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { phoneValidator } from '../../validators/phone.validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  personalInfo!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.personalInfo = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, phoneValidator()]),
    });
  }

  submit() {
    if (this.personalInfo.invalid) {
      this.markAllAsTouched();
    }
  }
  markAllAsTouched() {
    Object.keys(this.personalInfo.controls).forEach(
      (controlName: string | number) => {
        const control = this.personalInfo.controls[controlName];
        control.markAllAsTouched();
      }
    );
  }
}
