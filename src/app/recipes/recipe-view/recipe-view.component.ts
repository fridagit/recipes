import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Recipe} from '../../models';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit, OnDestroy {
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private router: Router) {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/food.jpg\')';
  }

  hostname(url: string) {
    const l = document.createElement('a');
    l.href = url;
    return l.hostname;
  }

  toggleEditMode() {
    this.router.navigate([`/recipes/${this.recipe.id}/edit`]);
  }

  ngOnInit() {
    this.route.data.subscribe((data: { recipe: Recipe }) => {
      this.recipe = data.recipe;
      this.recipe.image = this.recipe.image || '';
    });
  }

  ngOnDestroy() {
    document.body.style.backgroundImage = 'url(\'../../../assets/images/home.jpg\')';
  }
}
