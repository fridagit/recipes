import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Recipe} from '../models';

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
    this.recipesCollectionRef.doc(recipe.id).update(JSON.parse(JSON.stringify(recipe)));
  }

  storeRecipe(recipe: Recipe) {
    this.recipesCollectionRef.add(recipe);
  }
}
