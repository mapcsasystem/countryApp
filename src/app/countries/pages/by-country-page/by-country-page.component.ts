import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'by-country',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss'],
})
export class ByCountryPageComponent {
  private countriesService = inject(CountriesService);
  countries: ICountry[] = [];
  term = '';
  searchByCountry(country: string): void {
    this.countriesService.searchByCountry(country).subscribe((countries) => {
      this.countries = [...countries];
      this.term = country;
    });
  }
}
