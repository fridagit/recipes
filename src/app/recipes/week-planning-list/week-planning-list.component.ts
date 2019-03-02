import { Recipe } from './../../models/recipe.model';
import { RecipesService } from './../../services/recipes.service';
import { WeekMenu } from './../../models/weekMenu.model';
import { WeekplanService } from '../../services/weekplan.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-week-planning-list',
  templateUrl: './week-planning-list.component.html',
  styleUrls: ['./week-planning-list.component.scss']
})
export class WeekPlanningListComponent implements OnInit {
  weekMenus: Array<WeekMenu> = new Array<WeekMenu>();
  tempWeekMenu: Array<string> = new Array<string>();
  recipes: Array<Recipe> = new Array<Recipe>();

  constructor(private weekplanService: WeekplanService, private recipeService: RecipesService) { }

  ngOnInit() {
    this.loadWeekMenus();
  }

  loadWeekMenus() {
    const weekMenu = this.weekplanService.getTempWeekPlanning();
    for (const index in weekMenu) {
      if (index !== undefined) {
        const r = this.recipeService.getRecipeForWeekPlanning(weekMenu[index]);
        this.recipes.push(r);
      }
    }
  }
}
