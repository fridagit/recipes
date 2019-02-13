import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Recipe} from '../models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  recipesCollectionRef: AngularFirestoreCollection<Recipe>;

  constructor(private fireStore: AngularFirestore, private http: HttpClient) {
    this.recipesCollectionRef = this.fireStore.collection<Recipe>('recipes');
  }

  loadRecipes() {
    return this.fireStore.collection<Recipe>('recipes', ref => ref.orderBy('name')).snapshotChanges();
  }

  getRecipe(id: string): Observable<Recipe> {
    const doc = this.fireStore.collection<Recipe>('recipes').doc(id);
    return doc.snapshotChanges().pipe(
      map(data => data.payload.data() as Recipe)
    );
  }

  createOrUpdateRecipe(recipe: Recipe) {
    const recipeObject = JSON.parse(JSON.stringify(recipe));
    if (recipe.id) {
      this.recipesCollectionRef.doc(recipe.id).update(recipeObject);
    } else {
      this.recipesCollectionRef.add(recipeObject);
    }
  }
}
