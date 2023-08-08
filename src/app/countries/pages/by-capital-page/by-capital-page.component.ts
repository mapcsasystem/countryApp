import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'by-capital',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss'],
})
export class ByCapitalPageComponent {
  private readonly _countriesService = inject(CountriesService);
  countries: ICountry[] = [];
  term = '';
  seachByCapital(capital: string): void {
    this._countriesService.searchByCapital(capital).subscribe((countries) => {
      this.countries = [...countries];
      this.term = capital;
    });
  }
}
