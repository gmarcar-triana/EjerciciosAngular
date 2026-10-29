import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../../services/pokemon-service';
import { PokemonDetail } from '../../../interfaces/pokemon';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-detail-component',
  styleUrl: './pokemon-detail-component.css',
  templateUrl: './pokemon-detail-component.html',
})
export class PokemonDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  pokemonService = inject(PokemonService);
  pokemon = signal<PokemonDetail | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.pokemonService.getById(id).subscribe(resp => {
      this.pokemon.set(resp);
    });
  }
}
