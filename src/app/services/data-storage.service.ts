import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { RecipesService } from './recipes.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipesService) { }

    storeRecipes() {

    return this.http.put('https://recipes-2018.firebaseio.com/recipes.json', this.recipeService.getRecipes())
    .toPromise()
    .then(response => {
      console.error(response);
    })
    .catch(error => {
      console.error(error);
    });

    }
}
