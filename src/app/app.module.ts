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

import {RecipesService} from './services/recipes.service';
import {RecipeResolverService} from './services/recipe-resolver.service';
import {DataStorageService} from './services/data-storage.service';
import {AngularFirestore} from '@angular/fire/firestore';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {RecipeItemComponent} from './recipes/recipe-item/recipe-item.component';
import {IngredientEditComponent} from './recipes/ingredient-edit/ingredient-edit.component';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {RecipeViewComponent} from './recipes/recipe-view/recipe-view.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'recipes', component: RecipesListComponent},
  {path: 'recipes/new', component: RecipeEditComponent},
  {
    path: 'recipes/:id', component: RecipeViewComponent, resolve: {
      recipe: RecipeResolverService
    }
  },
  {
    path: 'recipes/:id/edit', component: RecipeEditComponent, resolve: {
      recipe: RecipeResolverService
    }
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeViewComponent,
    RecipeEditComponent,
    IngredientEditComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    MarkdownModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [RecipesService, DataStorageService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
