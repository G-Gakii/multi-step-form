import { Routes } from '@angular/router';
import { register } from 'module';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'plan',
    loadComponent: () =>
      import('./components/plan/plan.component').then((c) => c.PlanComponent),
  },
  {
    path: 'addons',
    loadComponent: () =>
      import('./components/add-ons/add-ons.component').then(
        (c) => c.AddOnsComponent
      ),
  },

  {
    path: 'complete',
    loadComponent: () =>
      import('./components/complete/complete.component').then(
        (c) => c.CompleteComponent
      ),
  },
];
