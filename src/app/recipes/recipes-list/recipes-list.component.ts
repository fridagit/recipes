import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../../models';

import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];

    constructor(private recipesService: RecipesService) {
      document.body.style.backgroundImage = "url('../../../assets/images/food.jpg')";

    }

    ngOnInit() {

        this.recipes = this.recipesService.getRecipes();
        console.log(this.recipes);
    }

    ngOnDestroy() {
      document.body.style.backgroundImage = "url('../../../assets/images/home.jpg')";
    }
}
