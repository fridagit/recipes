import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Recipe, WeekMenu } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeekplanService {
  weekMenus: Array<WeekMenu> = new Array<WeekMenu>();
  tempWeekMenu: Array<string> = new Array<string>();

  constructor(private db: DataStorageService) { }

  addRecipe(id: string) {
    const index = this.tempWeekMenu.indexOf(id);
    if (index === -1) {
      this.tempWeekMenu.push(id);
    }
  }

  removeRecipe(id: string) {
    const index = this.tempWeekMenu.indexOf(id);
    if (index > -1) {
      this.tempWeekMenu.splice(index, 1);
    }
  }

  recipeFound(id: string) {
     if (this.findInArray(this.tempWeekMenu, id)) {
      return true;
     } else {
      return false;
     }
  }

  getTempWeekPlanning() {
    return this.tempWeekMenu;
  }

  getWeekPlanning() {
    return this.weekMenus;
  }

  addRecipeToWeekMenu(weekNumber: number, id: string) {
     const menu = this.weekMenus.find(x => x.weekNumber === weekNumber);
     if (menu === undefined) {
       const m = new WeekMenu(weekNumber, new Array<string>());
       m.recipies.push(id);
       this.weekMenus.push(m);
     } else {
       menu.recipies.push(id);
     }
  }

  removeRecipeFromWeekMenu(weekNumber: number, id: string) {
    const menu = this.weekMenus.find(x => x.weekNumber === weekNumber);
     if (menu !== undefined) {
       const index = menu.recipies.indexOf(id);
       if (index > -1) {
        menu.recipies.splice(index, 1);
       }
     }
  }

  recipeFoundInWeekplan(weekNumber: number, id: string) {
    const menu = this.weekMenus.find(x => x.weekNumber === weekNumber);
     if (menu !== undefined) {
         if(this.findInArray(menu.recipies, id)) {
          return true;
         }
     }
     if (this.findInArray(this.tempWeekMenu, id)) {
      return true;
     }
  }

  private findInArray(list: Array<string>, id: string): boolean {
    const index = list.indexOf(id);
    if (index > -1) {
      return true;
     } else {
       return false;
     }
  }
}


