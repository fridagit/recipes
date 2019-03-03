import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Recipe} from '../../models';
import { WeekplanService } from '../../services/weekplan.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  recipe: Recipe;
  recipeAddedToWeekplan: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private weekplanService: WeekplanService) {
  }

  hostname(url: string) {
    const l = document.createElement('a');
    l.href = url;
    return l.hostname;
  }

  toggleEditMode() {
    this.router.navigate([`/${this.recipe.id}/edit`]);
  }

  ngOnInit() {
    this.route.data.subscribe((data: { recipe: Recipe }) => {
      this.recipe = data.recipe;
      this.recipe.image = this.recipe.image || '';
    });

    this.recipeAddedToWeekplan = this.weekplanService.recipeFoundInWeekplan(1, this.recipe.id);
  }

  addToWeekMenu() {
    this.weekplanService.addRecipe(this.recipe.id);
    this.recipeAddedToWeekplan = true;
  }

  removeRecipe() {
    this.weekplanService.removeRecipe(this.recipe.id);
    this.recipeAddedToWeekplan = false;
  }
}
