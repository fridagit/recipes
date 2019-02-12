import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient, Recipe} from '../../models';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  @ViewChild('canvas') public canvas: ElementRef;
  recipe: Recipe;
  showImage = true;
  newIngredient: Ingredient = new Ingredient('', '');
  newCategory: String = '';
  new: boolean;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService, private router: Router) {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/food.jpg\')';
  }

  ngOnInit() {
    this.route.data.subscribe((data: { recipe: Recipe }) => {
      this.recipe = data.recipe;
      if (!this.recipe) {
        this.recipe = new Recipe();
        this.showImage = false;
      }
    });
  }

  ngOnDestroy() {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/home.jpg\')';
  }

  cancel() {
    this.viewRecipe();
  }

  save() {
    if (this.newIngredient.name && this.newIngredient.number) {
      this.addIngredient(this.newIngredient);
    }
    if (this.newCategory) {
      this.addCategory(this.newCategory);
    }
    this.recipeService.createOrUpdateRecipe(this.recipe);
    this.viewRecipe();
  }

  private viewRecipe() {
    this.router.navigate([`/recipes/${this.recipe.id}`]);
  }

  removeIngredient(ingredient: Ingredient) {
    const index = this.recipe.ingredients.indexOf(ingredient);
    this.recipe.ingredients.splice(index, 1);
  }

  addIngredient(newIngredient: Ingredient) {
    if (!this.recipe.ingredients) {
      this.recipe.ingredients = [];
    }
    this.recipe.ingredients.push(newIngredient);
    this.newIngredient = new Ingredient('', '');
  }

  addCategory(newCategory: String) {
    if (!this.recipe.categories) {
      this.recipe.categories = [];
    }
    this.recipe.categories.push(newCategory);
    this.newCategory = '';
  }

  removeCategory(category: string) {
    const index = this.recipe.categories.indexOf(category);
    this.recipe.categories.splice(index, 1);
  }

  paste(pasteEvent) {
    if (pasteEvent.clipboardData) {
      const items: [] = pasteEvent.clipboardData.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          if (item.type.indexOf('image') > -1) {
            const blob = item.getAsFile();
            this.showImage = false;
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
      canvasElement.width = img.width;
      canvasElement.height = img.height;
      ctx.drawImage(img, 0, 0);
      recipe.image = canvasElement.toDataURL('image/png');
    };
    img.src = window.URL.createObjectURL(blob);
  }
}
