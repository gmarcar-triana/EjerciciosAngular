import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NamedResource } from '../../../interfaces/named-resource-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-item-component',
  styleUrl: './pokemon-item-component.css',
  templateUrl: './pokemon-item-component.html',
})
export class PokemonItemComponent {
  pokemon = input.required<NamedResource>();

  id = computed(() => this.pokemon().url.split('/').filter(Boolean).pop()!);
  image = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id()}.png`);
}
