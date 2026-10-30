import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";
import { RickyMortyListResponse } from "../interfaces/rickymorty-list-response";
import { RickyMortyDetailResponse } from "../interfaces/rickymorty-detail-response";



@Service()
export class RickymortyService {
    http = inject(HttpClient);

    getAll(): Observable<RickyMortyListResponse> {
        return this.http.get<RickyMortyListResponse>('https://rickandmortyapi.com/api/character/')
    }

    getOne(id: string): Observable<RickyMortyDetailResponse> {
        return this.http.get<RickyMortyDetailResponse>(`https://rickandmortyapi.com/api/character/${id}`)
    }


} 