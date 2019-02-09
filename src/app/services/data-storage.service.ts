import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { RecipesService } from './recipes.service';
import { Recipe } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

    recipesCollectionRef: AngularFirestoreCollection<Recipe>;

    constructor(private fireStore: AngularFirestore, private http: HttpClient) {
      this.recipesCollectionRef = this.fireStore.collection<Recipe>('recipes');
     }

    loadRecipes() {
      return this.fireStore.collection<Recipe>('recipes').snapshotChanges();
    }

    updateRecipe(recipe: Recipe) {
      this.recipesCollectionRef.doc(recipe.id).update(recipe);
    }

    storeRecipes() {

    // return this.http.put('https://recipes-2018.firebaseio.com/recipes.json', this.recipeService.getRecipes())
    // .toPromise()
    // .then(response => {
    //   console.error(response);
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    }
}
