import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Category} from '../../models';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {
  @Input()
  category: Category;
  @Input()
  icon: string;
  @Output()
  clicked = new EventEmitter<Category>();

  onKeydown(event) {
    if (event.key === 'Enter' && this.category) {
      this.clicked.emit(this.category);
    }
  }
}
