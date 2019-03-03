import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('searchElement') public searchElement: ElementRef;
  search: string;

  constructor(private searchService: SearchService, private router: Router) {
  }

  public searchChanged(): void {
    this.router.navigate(['/']);
    this.searchService.search(this.search);
  }

  public focus(): void {
    this.searchElement.nativeElement.focus();
  }
}
