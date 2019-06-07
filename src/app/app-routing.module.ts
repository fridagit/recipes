import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// const appRoutes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent,
//   },
//   {
//     path: '',
//     component: RecipesListComponent,
//     canActivate: [AuthGuard],
//   },
//   {
//     path: 'planning',
//     component: WeekPlanningListComponent,
//     canActivate: [AuthGuard],
//   },
//   {
//     path: 'new',
//     component: RecipeEditComponent,
//     canActivate: [AuthGuard],
//   },
//   {
//     path: ':id',
//     component: RecipeViewComponent,
//     resolve: {
//       recipe: RecipeResolverService
//     },
//     canActivate: [AuthGuard],
//   },
//   {
//     path: ':id/edit',
//     component: RecipeEditComponent,
//     resolve: {
//       recipe: RecipeResolverService
//     },
//     canActivate: [AuthGuard],
//   },
//   {
//     path: '**',
//     component: RecipesListComponent,
//     canActivate: [AuthGuard],
//   }
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
