import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Category} from '../../models';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private search: string;

  constructor(private searchService: SearchService) {
  }

  public searchChanged(): void {
    this.searchService.search(this.search);
  }


}
