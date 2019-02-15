import {Observable, BehaviorSubject} from 'rxjs';
import {DataStorageService} from './data-storage.service';
import {Injectable, OnInit} from '@angular/core';
import {Recipe} from '../models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Observable<Recipe[]>;
  private _recipes: BehaviorSubject<Recipe[]>;
  private dataStore: {
    recipes: Recipe[]
  };

  constructor(private db: DataStorageService) {
    this.dataStore = {recipes: []};
    this._recipes = <BehaviorSubject<Recipe[]>>new BehaviorSubject([]);
    this.recipes = this._recipes.asObservable();
    this.loadRecipes();
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.db.getRecipe(id);
  }

  createOrUpdateRecipe(recipe: Recipe) {
    this.db.createOrUpdateRecipe(recipe);
  }

  removeRecipe(recipe: Recipe) {
    this.db.removeRecipe(recipe);
  }

  private loadRecipes() {
    this.db.loadRecipes().subscribe(data => {
      this.dataStore.recipes = data.map(e => this.db.payloadAsRecipe(e.payload.doc));
      this._recipes.next(Object.assign({}, this.dataStore).recipes);
    });
  }
}
