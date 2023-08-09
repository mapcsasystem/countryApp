import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'by-country',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss'],
})
export class ByCountryPageComponent implements OnInit {
  private readonly _countriesService = inject(CountriesService);
  countries: ICountry[] = [];
  initialValue = '';
  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byCoutries.countries;
    this.initialValue = this._countriesService.cacheStore.byCoutries.term;
  }
  searchByCountry(term: string): void {
    this._countriesService.searchByCountry(term).subscribe((countries) => {
      this.countries = [...countries];
    });
  }
}
