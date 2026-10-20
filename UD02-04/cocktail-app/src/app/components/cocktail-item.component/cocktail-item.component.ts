import { Component, input } from '@angular/core';
import { Drink } from '../../interfaces/cocktail-list-response'

@Component({
  imports: [],
  selector: 'app-cocktail-item.component',
  styleUrl: './cocktail-item.component.css',
  templateUrl: './cocktail-item.component.html',
})
export class CocktailItemComponent {
  cocktail = input<Drink>();
}
