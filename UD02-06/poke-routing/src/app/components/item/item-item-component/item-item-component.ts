import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NamedResource } from '../../../interfaces/named-resource-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-item-item-component',
  styleUrl: './item-item-component.css',
  templateUrl: './item-item-component.html',
})
export class ItemItemComponent {
  item = input.required<NamedResource>();

  id = computed(() => this.item().url.split('/').filter(Boolean).pop()!);
  image = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.item().name}.png`);
}
