import { Routes } from '@angular/router';
import { RickymortyListComponent } from './components/rickymorty-list-component/rickymorty-list-component/rickymorty-list-component';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component/episode-list-component';

export const routes: Routes = [
    {path: 'character-list', component: RickymortyListComponent},
    {path: 'episode-list', component: EpisodeListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/character-list'}
];
