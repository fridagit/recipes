import {environment} from '../environments/environment';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import {RecipesService} from './services/recipes.service';
import {RecipeResolverService} from './services/recipe-resolver.service';
import {DataStorageService} from './services/data-storage.service';
import {AngularFirestore} from '@angular/fire/firestore';

import {AppComponent} from './app.component';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {RecipeItemComponent} from './recipes/recipe-item/recipe-item.component';
import {IngredientEditComponent} from './recipes/ingredient-edit/ingredient-edit.component';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {RecipeViewComponent} from './recipes/recipe-view/recipe-view.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {CategoryEditComponent} from './recipes/category-edit/category-edit.component';

const appRoutes: Routes = [
  {path: '', component: RecipesListComponent},
  {path: 'new', component: RecipeEditComponent},
  {
    path: ':id', component: RecipeViewComponent, resolve: {
      recipe: RecipeResolverService
    }
  },
  {
    path: ':id/edit', component: RecipeEditComponent, resolve: {
      recipe: RecipeResolverService
    }
  },
  {path: '**', component: RecipesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeViewComponent,
    RecipeEditComponent,
    IngredientEditComponent,
    CategoryEditComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      useHash: true
    }),
    MarkdownModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [RecipesService, DataStorageService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
