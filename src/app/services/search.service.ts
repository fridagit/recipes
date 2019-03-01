import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private onSearchSubject: Subject<string> = new Subject<string>();
  public onSearch$: Observable<string> = this.onSearchSubject.asObservable();

  search(search: string) {
    this.onSearchSubject.next(search);
  }
}
