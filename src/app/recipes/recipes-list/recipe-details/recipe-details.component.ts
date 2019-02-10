import {ActivatedRoute, Params} from '@angular/router';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient, Recipe} from '../../../models';
import {RecipesService} from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('canvas') public canvas: ElementRef;
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

  paste(pasteEvent) {
    if (pasteEvent.clipboardData) {
      const items: [] = pasteEvent.clipboardData.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          if (item.type.indexOf('image') > -1) {
            const blob = item.getAsFile();
            this.paintImage(blob, this.recipe);
          }
        }
      }
    }
  }

  private paintImage(blob, recipe: Recipe) {
    const canvasElement = this.canvas.nativeElement;
    const ctx = canvasElement.getContext('2d');
    const img = new Image();
    img.onload = function () {
      canvasElement.width = '300';
      canvasElement.height = '300';
      ctx.drawImage(img, 0, 0, 300, 300 * img.height / img.width);
      recipe.image = canvasElement.toDataURL('image/png');
    };
    img.src = window.URL.createObjectURL(blob);
  }
}
