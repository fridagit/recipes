import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { WeekPlanningListComponent } from './components/week-planning-list/week-planning-list.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { RecipeResolverService } from './services/recipe-resolver.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: RecipesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'planning',
    component: WeekPlanningListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: RecipeEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: RecipeViewComponent,
    resolve: {
      recipe: RecipeResolverService
    },
    canActivate: [AuthGuard],
  },
  {
    path: ':id/edit',
    component: RecipeEditComponent,
    resolve: {
      recipe: RecipeResolverService
    },
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: RecipesListComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      useHash: true
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
