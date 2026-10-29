import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon/pokemon-list-component/pokemon-list-component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail-component/pokemon-detail-component';
import { BerryListComponent } from './components/berry/berry-list-component/berry-list-component';
import { BerryDetailComponent } from './components/berry/berry-detail-component/berry-detail-component';
import { ItemListComponent } from './components/item/item-list-component/item-list-component';
import { ItemDetailComponent } from './components/item/item-detail-component/item-detail-component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'berries', component: BerryListComponent },
  { path: 'berries/:id', component: BerryDetailComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'items/:id', component: ItemDetailComponent },
  { path: '**', redirectTo: 'pokemon' },
];
