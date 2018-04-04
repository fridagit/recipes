import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models';

import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
 
    this.recipes = this.recipesService.getRecipes();
      console.log(this.recipes);
  }

}
