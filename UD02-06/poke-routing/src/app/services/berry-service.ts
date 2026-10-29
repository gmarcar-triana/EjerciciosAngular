import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedResourceListResponse } from '../interfaces/named-resource-list-response';
import { BerryDetail } from '../interfaces/berry';

@Service()
export class BerryService {
    private http = inject(HttpClient);

    getAll(): Observable<NamedResourceListResponse> {
        return this.http.get<NamedResourceListResponse>('https://pokeapi.co/api/v2/berry/');
    }

    getById(id: string): Observable<BerryDetail> {
        return this.http.get<BerryDetail>(`https://pokeapi.co/api/v2/berry/${id}`);
    }
}
