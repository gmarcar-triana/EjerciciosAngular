import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListResponse } from '../interfaces/character-list-response';

@Service()
export class CharacterService {
private http = inject(HttpClient);

    getAllCharacter(): Observable<CharacterListResponse> {
        return this.http.get<CharacterListResponse>(`https://rickandmortyapi.com/api/character`);
    }
}