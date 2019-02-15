import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient, Recipe, Category} from '../../models';
import {RecipesService} from '../../services/recipes.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  @ViewChild('canvas') public canvas: ElementRef;
  @ViewChild('container') public container: ElementRef;
  recipe: Recipe;
  showImage = true;
  newIngredient: Ingredient = new Ingredient('', '');
  newCategory: Category = new Category('');
  new: boolean;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService, private router: Router, private toastr: ToastrService) {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/food.jpg\')';
  }

  ngOnInit() {
    this.route.data.subscribe((data: { recipe: Recipe }) => {
      this.recipe = data.recipe;
      this.recipe.image = this.recipe.image || '';
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

  delete() {
    this.recipeService.removeRecipe(this.recipe);
    this.router.navigate([`/recipes/`]);
  }

  save() {
    if (this.newIngredient.name && this.newIngredient.number) {
      this.addIngredient(this.newIngredient);
    }
    if (this.newCategory.name) {
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

  addCategory(newCategory: Category) {
    if (!this.recipe.categories) {
      this.recipe.categories = [];
    }
    this.recipe.categories.push(newCategory);
    this.newCategory = new Category('');
  }

  removeCategory(category: Category) {
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
            this.paintImage(blob);
          }
        }
      }
    }
  }

  private paintImage(blob) {
    const canvasElement = this.canvas.nativeElement;
    canvasElement.height = 190;
    const ctx = canvasElement.getContext('2d');
    const img = new Image();
    img.onload = () => {
      this.drawImageCroppedAndScaled(img, ctx)
        .then(() => {
          this.recipe.image = canvasElement.toDataURL('image/png');
        })
        .catch((err) => {
          this.toastr.error(err, 'Ajdå! 🙄', {disableTimeOut: true});
          canvasElement.height = 0;
          this.showImage = true;
        });
    };
    img.src = window.URL.createObjectURL(blob);
  }

  private drawImageCroppedAndScaled(img, ctx) {
    return new Promise((resolve, reject) => {
      const canvas = ctx.canvas;
      if (img.width < canvas.width || img.height < canvas.height) {
        reject('Verkar visst som bilden du ville använda var för liten. Prova med en större bild!');
      } else {
        const cropRatio = canvas.width / canvas.height;
        const origRatio = img.width / img.height;
        let srcWidth = img.width;
        let srcHeight = img.height;
        let srcX = 0;
        let srcY = 0;
        if (origRatio > cropRatio) {
          srcWidth = cropRatio * img.height;
          srcX = (img.width - srcWidth) / 2;
        } else {
          srcHeight = img.height / cropRatio;
          srcY = (img.height - srcHeight) / 2;
        }
        ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight,
          0, 0, canvas.width, canvas.height);
        resolve();
      }
    });
  }
}
