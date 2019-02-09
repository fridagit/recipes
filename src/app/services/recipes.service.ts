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
    return this.recipes.pipe(
      map(recipes => recipes.find(recipe => recipe.id === id))
    );
  }

  updateRecipe(recipe: Recipe) {
    this.db.updateRecipe(recipe);
  }

  private loadRecipes() {
    this.db.loadRecipes().subscribe(data => {
      this.dataStore.recipes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Recipe;
      });
      this._recipes.next(Object.assign({}, this.dataStore).recipes);
    });
  }
}
