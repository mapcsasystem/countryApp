import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss'],
})
export class NoFoundComponent {
  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }
}
