import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Ingredient} from '../../models';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.scss']
})
export class IngredientEditComponent {
  @Input()
  ingredient: Ingredient;
  @Input()
  icon: string;
  @Output()
  clicked = new EventEmitter<Ingredient>();
}
