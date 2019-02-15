import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models';

import {RecipesService} from '../../services/recipes.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {defineDirective} from '@angular/core/src/render3';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import {firestore} from 'firebase';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Observable<Recipe[]>;

  constructor(private db: AngularFireDatabase, private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.recipes = this.recipesService.recipes;
  }
}
