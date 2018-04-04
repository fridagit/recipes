import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RecipesService } from './services/recipes.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'recipes', component: RecipesListComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    RecipesListComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
