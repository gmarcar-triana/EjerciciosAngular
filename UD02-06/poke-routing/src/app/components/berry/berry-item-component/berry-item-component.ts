import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NamedResource } from '../../../interfaces/named-resource-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-berry-item-component',
  styleUrl: './berry-item-component.css',
  templateUrl: './berry-item-component.html',
})
export class BerryItemComponent {
  berry = input.required<NamedResource>();

  id = computed(() => this.berry().url.split('/').filter(Boolean).pop()!);
  image = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.berry().name}-berry.png`);
}
