import {WeekplanService} from '../../services/weekplan.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  image: string;
  recipeAddedToWeekplan: boolean;
  @Output()
  categoryClicked = new EventEmitter<string>();

  constructor(private weekplanService: WeekplanService) {
  }

  ngOnInit() {
    this.image = this.recipe.image || '../../../../assets/images/table2.jpg';
    this.recipeAddedToWeekplan = this.weekplanService.recipeFound(this.recipe.id);
  }

  addToWeekMenu() {
    this.weekplanService.addRecipe(this.recipe.id);
    this.recipeAddedToWeekplan = true;
  }

  removeRecipe() {
    this.weekplanService.removeRecipe(this.recipe.id);
    this.recipeAddedToWeekplan = false;
  }

  categoryNames(recipe: Recipe) {
    return recipe.categories ? recipe.categories.map(category => category.name) : [];
  }
}
