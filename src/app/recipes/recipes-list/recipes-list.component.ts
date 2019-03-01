import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models';

import {RecipesService} from '../../services/recipes.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
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
  recipes: Observable<Recipe[]>;
  unfilteredRecipes: Observable<Recipe[]>;

  constructor(private db: AngularFireDatabase, private recipesService: RecipesService, private searchService: SearchService) {
    searchService.onSearch$.subscribe((search: string) => {
      this.recipes = this.unfilteredRecipes.pipe(
        map(recipes => recipes.filter(recipe => recipe.name.toLowerCase().indexOf(search.toLowerCase()) > -1))
      );
    });
  }

  ngOnInit() {
    this.recipes = this.recipesService.recipes;
    this.unfilteredRecipes = this.recipesService.recipes;
  }
}
