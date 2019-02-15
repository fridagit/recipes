import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Recipe} from '../../models';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  hostname(url: string) {
    const l = document.createElement('a');
    l.href = url;
    return l.hostname;
  }

  toggleEditMode() {
    this.router.navigate([`/${this.recipe.id}/edit`]);
  }

  ngOnInit() {
    this.route.data.subscribe((data: { recipe: Recipe }) => {
      this.recipe = data.recipe;
      this.recipe.image = this.recipe.image || '';
    });
  }
}
