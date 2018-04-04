import { Injectable } from '@angular/core';
import { Recipe } from '../models';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe("Flygande Jacob", "https://img.koket.se/media/flygande-jacob.jpg", "https://www.koket.se/flygande-jacob-med-notter"),

    new Recipe("Köttbullar med potatismos",
      "https://img.koket.se/media/kottbullar-pelle-johanssons-recept2.jpg",
      "https://www.koket.se/lattlagat/pelle-johansson/kottbullar--pelle-johanssons-recept/")];

  getRecipes() {
      return this.recipes;
  }
}
