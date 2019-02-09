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
  id: number;
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
    this.route.params.subscribe((params: Params) => this.id = +params['id']);
  }

  ngOnDestroy() {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/home.jpg\')';
  }

  saveDescription() {
    this.recipeService.updateRecipe(this.id, this.recipe);
    console.log(this.recipe.description);
    console.log('TODO: Actual storage to be implemented');
    this.toggleEditMode();
  }

  removeIngredient(ingredient: Ingredient) {
    const index = this.recipe.ingredients.indexOf(ingredient);
    this.recipe.ingredients.splice(index, 1);
  }

  addIngredient() {
    this.recipe.ingredients.push(this.newIngredient);
    this.newIngredient = new Ingredient('', '');
  }
}
