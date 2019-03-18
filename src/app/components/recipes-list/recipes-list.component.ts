import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models';

import {RecipesService} from '../../services/recipes.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable, of} from 'rxjs';
import {defineDirective} from '@angular/core/src/render3';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {firestore} from 'firebase';
import {map} from 'rxjs/operators';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  unfilteredRecipes: Recipe[];
  selectedCategories: string[] = [];
  private search = '';

  constructor(private db: AngularFireDatabase, private recipesService: RecipesService, private searchService: SearchService) {
    searchService.onSearch$.subscribe((search: string) => {
      this.search = search;
      this.applyFilters();
    });
  }

  private applyFilters() {
    this.recipes = this.unfilteredRecipes
      .filter(recipe => recipe.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
      .filter(recipe => {
        if (this.selectedCategories.length) {
          return recipe.categories && recipe.categories
            .map(category => category.name)
            .some(name => name && this.selectedCategories.includes(name.toLowerCase()));
        }
        return true;
      });
  }

  ngOnInit() {
    this.recipesService.recipes.subscribe(recipes => {
      this.recipes = recipes;
      this.unfilteredRecipes = recipes;
    });
  }

  selectCategory(category: string) {
    if (category && !this.selectedCategories.includes(category.toLowerCase())) {
      this.selectedCategories.push(category.toLowerCase());
    }
    this.applyFilters();
  }

  deselectCategory(category: string) {
    const index = this.selectedCategories.indexOf(category.toLowerCase());
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    }
    this.applyFilters();
  }
}
