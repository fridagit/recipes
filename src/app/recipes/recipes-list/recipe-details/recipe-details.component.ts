import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient, Recipe} from '../../../models';
import {RecipesService} from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  edit: boolean;
  newIngredient: Ingredient = new Ingredient('', '');

  constructor(private route: ActivatedRoute, private recipeService: RecipesService) {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/food.jpg\')';

  }

  hostname(url: string) {
    const l = document.createElement('a');
    l.href = url;
    return l.hostname;
  }

  hasImage(recipe: Recipe) {
    return recipe.image != null;
  }

  toggleEditMode() {
    this.edit = !this.edit;
  }

  ngOnInit() {
    this.route.data.subscribe((data: { recipe: Recipe }) => this.recipe = data.recipe);
  }

  ngOnDestroy() {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/home.jpg\')';
  }

  save() {
    if (this.newIngredient.name && this.newIngredient.number) {
      this.addIngredient();
    }
    this.recipeService.updateRecipe(this.recipe);
    this.toggleEditMode();
  }

  removeIngredient(ingredient: Ingredient) {
    const index = this.recipe.ingredients.indexOf(ingredient);
    this.recipe.ingredients.splice(index, 1);
  }

  addIngredient() {
    if (!this.recipe.ingredients) {
      this.recipe.ingredients = [];
    }
    this.recipe.ingredients.push(this.newIngredient);
    this.newIngredient = new Ingredient('', '');
  }
}
