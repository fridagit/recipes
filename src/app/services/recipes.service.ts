import { Injectable } from '@angular/core';
import { Recipe, Category } from '../models';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe("Flygande Jacob",
      "https://img.koket.se/media/flygande-jacob.jpg",
      "https://www.koket.se/flygande-jacob-med-notter",
      [new Category("Kyckling"), new Category("Nötter")]),

    new Recipe("Köttbullar med potatismos",
      "https://img.koket.se/media/kottbullar-pelle-johanssons-recept2.jpg",
      "https://www.koket.se/lattlagat/pelle-johansson/kottbullar--pelle-johanssons-recept/",
    [new Category("Färs"), new Category("Potatis")])
  ];

  getRecipes() {
      return this.recipes;
  }
}
