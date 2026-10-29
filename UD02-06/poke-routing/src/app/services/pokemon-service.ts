import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedResourceListResponse } from '../interfaces/named-resource-list-response';
import { PokemonDetail } from '../interfaces/pokemon';

@Service()
export class PokemonService {
    private http = inject(HttpClient);

    getAll(): Observable<NamedResourceListResponse> {
        return this.http.get<NamedResourceListResponse>('https://pokeapi.co/api/v2/pokemon/');
    }

    getById(id: string): Observable<PokemonDetail> {
        return this.http.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
}
