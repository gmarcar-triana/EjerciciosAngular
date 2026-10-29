import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../../services/pokemon-service';
import { NamedResource } from '../../../interfaces/named-resource-list-response';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';

@Component({
  imports: [PokemonItemComponent],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent implements OnInit {
  pokemonService = inject(PokemonService);
  list = signal<NamedResource[]>([]);

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(resp => {
      this.list.set(resp.results);
    });
  }
}
