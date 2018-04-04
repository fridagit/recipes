import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../../models';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
    recipe: Recipe;
    id: number;

    constructor(private route: ActivatedRoute, private recipeService: RecipesService) {
        document.body.style.backgroundImage = "url('../../../assets/images/table.jpg')";

    }

  ngOnInit() {
      this.route.params
          .subscribe(
              (params: Params) => {
                  this.id = +params['id'];
                  this.recipe = this.recipeService.getRecipe(this.id);
              }
          );
  }

    ngOnDestroy() {
        document.body.style.backgroundImage = "url('../../../assets/images/home.jpg')";
    }

}
