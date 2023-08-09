import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private _debouncer = new Subject<string>();
  @Input({ required: true }) placeholder: string = '';
  @Input() initialValue: string = '';
  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  private _subscription = new Subscription();
  ngOnInit(): void {
    this._subscription.add(
      this._debouncer.pipe(debounceTime(5000)).subscribe((value) => {
        this.onDebounce.emit(value);
      })
    );
  }
  emmitValue(value: string): void {
    this.onValue.emit(value);
  }

  onkeyPress(searchTerm: string): void {
    this.onDebounce.next(searchTerm);
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
