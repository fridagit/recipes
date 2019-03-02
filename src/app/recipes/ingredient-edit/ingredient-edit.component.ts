import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from '../../models';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.scss']
})
export class IngredientEditComponent {
  @ViewChild('number') public number: ElementRef;

  @Input()
  ingredient: Ingredient;
  @Input()
  icon: string;
  @Output()
  clicked = new EventEmitter<Ingredient>();
  @Output()
  enter = new EventEmitter<Ingredient>();

  onKeydown(event) {
    if (event.key === 'Enter' && this.ingredient.name && this.ingredient.number) {
      this.enter.emit(this.ingredient);
      this.number.nativeElement.focus();
    }
  }
}
