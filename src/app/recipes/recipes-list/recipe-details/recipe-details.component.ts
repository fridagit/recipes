import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../../../services/data-storage.service';
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
  editDescription: boolean;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService, private dataStorageService: DataStorageService) {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/onion.jpg\')';

  }

  hostname(url: string) {
    const l = document.createElement('a');
    l.href = url;
    return l.hostname;
  }

  hasImage(recipe: Recipe) {
    return recipe.image != null;
  }

  toggleEditDescription() {
    this.editDescription = !this.editDescription;
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
    document.body.style.backgroundImage = 'url(\'../../../assets/images/home.jpg\')';
  }

  saveDescription() {
    this.recipeService.updateRecipe(this.id, this.recipe);
    // this.dataStorageService.storeRecipe(this.recipe);
    console.log(this.recipe.description);
    console.log('TODO: Actual storage to be implemented');
  }
}
