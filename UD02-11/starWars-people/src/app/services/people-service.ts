import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse } from '../interfaces/peopleListResponse';
import { PeopleDetailResponse } from '../interfaces/peopleDetailResponse';

@Service()
export class PeopleService {
  http = inject(HttpClient);

  getAll(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>('https://swapi.dev/api/people');
  }

  getOne(id: string): Observable<PeopleDetailResponse> {
    return this.http.get<PeopleDetailResponse>(`https://swapi.dev/api/people/${id}/`);
  }
}
