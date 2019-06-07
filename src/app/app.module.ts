import {environment} from '../environments/environment';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HotkeyModule} from 'angular2-hotkeys';

import {RecipesService} from './services/recipes.service';
import {RecipeResolverService} from './services/recipe-resolver.service';
import {DataStorageService} from './services/data-storage.service';
import {AngularFirestore} from '@angular/fire/firestore';

import {AppComponent} from './app.component';
import {RecipesListComponent} from './components/recipes-list/recipes-list.component';
import {RecipeItemComponent} from './components/recipe-item/recipe-item.component';
import {IngredientEditComponent} from './components/ingredient-edit/ingredient-edit.component';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {RecipeViewComponent} from './components/recipe-view/recipe-view.component';
import {RecipeEditComponent} from './components/recipe-edit/recipe-edit.component';
import {CategoryEditComponent} from './components/category-edit/category-edit.component';
import {SearchComponent} from './components/search/search.component';
import {SearchService} from './services/search.service';
import {WeekplanService} from './services/weekplan.service';
import {AuthService} from './services/auth.service';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './services/auth.guard';
import {WeekPlanningListComponent} from './components/week-planning-list/week-planning-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule,
  MatFormFieldModule, MatInputModule, MatSidenavModule, MatListModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeViewComponent,
    RecipeEditComponent,
    IngredientEditComponent,
    CategoryEditComponent,
    SearchComponent,
    WeekPlanningListComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    HotkeyModule.forRoot(),
    DragDropModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    RecipesService,
    DataStorageService,
    AngularFirestore,
    SearchService,
    WeekplanService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
