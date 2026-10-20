import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DrinkResponse } from "../interfaces/cocktail-list-response";


@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    private http = inject(HttpClient);

    getCocktails(): Observable<DrinkResponse> {
        return this.http.get<DrinkResponse>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a');
    }
}