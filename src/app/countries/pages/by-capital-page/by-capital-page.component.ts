import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'by-capital',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss'],
})
export class ByCapitalPageComponent implements OnInit {
  private readonly _countriesService = inject(CountriesService);
  countries: ICountry[] = [];
  initialValue = '';
  term = '';
  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byCapital.coutries;
    this.initialValue = this._countriesService.cacheStore.byCapital.term;
  }

  seachByCapital(term: string): void {
    this._countriesService.searchByCapital(term).subscribe((countries) => {
      this.countries = [...countries];
    });
  }
}
