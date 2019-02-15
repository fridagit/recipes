import {Injectable} from '@angular/core';
import {Recipe} from '../models';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {RecipesService} from './recipes.service';
import {take, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe> {

  constructor(private recipeService: RecipesService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Observable<never> {
    const id = route.paramMap.get('id');
    return this.recipeService.getRecipe(id).pipe(
      take(1),
      mergeMap(recipe => {
        if (recipe) {
          return of(recipe);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
