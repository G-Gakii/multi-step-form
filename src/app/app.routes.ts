import { Routes } from '@angular/router';
import { register } from 'module';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];
