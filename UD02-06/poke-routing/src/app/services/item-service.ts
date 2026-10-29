import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedResourceListResponse } from '../interfaces/named-resource-list-response';
import { ItemDetail } from '../interfaces/item';

@Service()
export class ItemService {
    private http = inject(HttpClient);

    getAll(): Observable<NamedResourceListResponse> {
        return this.http.get<NamedResourceListResponse>('https://pokeapi.co/api/v2/item/');
    }

    getById(id: string): Observable<ItemDetail> {
        return this.http.get<ItemDetail>(`https://pokeapi.co/api/v2/item/${id}`);
    }
}
