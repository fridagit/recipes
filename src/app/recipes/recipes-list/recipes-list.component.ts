import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../../models';

import { RecipesService } from '../../services/recipes.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { defineDirective } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipesColl: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;
  // todoCollectionRef: AngularFirestoreCollection<Todo>;
  // todo$: Observable<Todo[]>;

  // constructor(private afs: AngularFirestore) {
  //   this.todoCollectionRef = this.afs.collection<Todo>('todos');
  //   this.todo$ = this.todoCollectionRef.snapshotChanges().map(actions => {
  //     return actions.map(action => {
  //       const data = action.payload.doc.data() as Todo;
  //       const id = action.payload.doc.id;
  //       return { id, ...data };
  //     });
  //   });
  // }
    constructor(private db: AngularFireDatabase, private recipesService: RecipesService, private fireStore: AngularFirestore) {
      // this.recipesColl = this.fireStore.collection<Recipe>('recipes');
      // this.recipesColl.snapshotChanges().subscribe(data => {
      //   this.recipes = data.map(e => {
      //     return {
      //       id: e.payload.doc.id,
      //       ...e.payload.doc.data()
      //     } as Recipe;
      //   });
      //   console.log(this.recipes);
      // });

      document.body.style.backgroundImage = "url('../../../assets/images/food.jpg')";
    }

    ngOnInit() {
        console.log('RecipesListComponent');
        this.recipes = this.recipesService.recipes;
        this.recipesService.loadRecipes();
        console.log(this.recipes);
        // this.recipesService.getRecipes().subscribe(data => {
        //     this.recipes = data;
        //     console.log(this.recipes);
        //   });

    }

    ngOnDestroy() {
      document.body.style.backgroundImage = "url('../../../assets/images/home.jpg')";
    }
}
