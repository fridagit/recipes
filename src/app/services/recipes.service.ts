import { Injectable } from '@angular/core';
import { Recipe } from '../models';

@Injectable()
export class RecipesService {
    recipes: Recipe[] = [new Recipe("Ostkaka"), new Recipe("Köttbullar med potatismos")];

  getRecipes() {
      return this.recipes;
  }
}
