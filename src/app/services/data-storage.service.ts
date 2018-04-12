import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipesService } from './recipes.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipesService) { }

    storeRecipes() {
      return this.http.put('https://recipes-2018.firebaseio.com/recipes.json', this.recipeService.getRecipes());

    }
}
