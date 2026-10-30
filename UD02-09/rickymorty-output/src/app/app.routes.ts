import { Routes } from '@angular/router';
import { RickymortyListComponent } from './components/rickymorty-list-component/rickymorty-list-component/rickymorty-list-component';

export const routes: Routes = [
    {path: 'character-list', component: RickymortyListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/character-list'}
];
