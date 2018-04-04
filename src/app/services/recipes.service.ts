import { Injectable } from '@angular/core';
import { Recipe, Category, Ingredient } from '../models';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe("Flygande Jacob",
      "https://img.koket.se/media/flygande-jacob.jpg",
      "https://www.koket.se/flygande-jacob-med-notter",
      "Sätt ugnen på 225 grader. Ta loss det grillade kycklingköttet från benen. Skär köttet i mindre bitar. Lägg bitarna i smord ugnssäker form. Krydda med salladskryddan. Skala och skiva bananerna. Lägg bananskivorna ovanpå kycklingen.",
      [new Category("Kyckling"), new Category("Nötter")],
      [new Ingredient("färdiggrillad kyckling", "1"), new Ingredient("bananer", "2")]),

    new Recipe("Köttbullar med potatismos",
      "https://img.koket.se/media/kottbullar-pelle-johanssons-recept2.jpg",
      "https://www.koket.se/lattlagat/pelle-johansson/kottbullar--pelle-johanssons-recept/",
      "",
      [new Category("Färs"), new Category("Potatis")],
      [])
  ];

  getRecipe(index: number) {
      return this.recipes[index];
  }

  getRecipes() {
      return this.recipes.slice();
  }
}
