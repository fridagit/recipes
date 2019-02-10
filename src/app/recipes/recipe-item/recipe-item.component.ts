import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../../models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  image: string;
  @Input() index: string;

  constructor() {
  }

  ngOnInit() {
    this.image = this.recipe.image || '../../../../assets/images/table2.jpg';
  }

}
