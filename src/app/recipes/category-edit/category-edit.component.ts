import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {
  @Input()
  category: String;
  @Input()
  icon: string;
  @Output()
  clicked = new EventEmitter<String>();
}
