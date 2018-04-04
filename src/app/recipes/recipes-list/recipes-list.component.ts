import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';

import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipesService: RecipesService) { }

  ngOnInit() {

      this.recipes = this.recipesService.getRecipes();
      console.log(this.recipes);
  }

}
