import { Routes } from '@angular/router';
import { RegisterForm } from './components/register-form/register-form';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    {path: 'registro', component: RegisterForm},
    {path: '', pathMatch: 'full', redirectTo: '/registro'},
    {path: '**', component: NotFoundPage}
];
