import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  @Input({ required: true }) placeholder: string = '';
  @Output() onValue = new EventEmitter<string>();

  emmitValue(value: string): void {
    this.onValue.emit(value);
  }
}
