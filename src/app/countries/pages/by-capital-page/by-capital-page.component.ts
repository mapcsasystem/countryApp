import { Component } from '@angular/core';

@Component({
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss'],
})
export class ByCapitalPageComponent {
  seachByCapital(term: string): void {
    console.log({ term });
  }
}
