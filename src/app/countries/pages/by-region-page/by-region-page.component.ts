import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'by-region',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss'],
})
export class ByRegionPageComponent implements OnInit {
  private readonly _countriesService = inject(CountriesService);
  countries: ICountry[] = [];
  initialValue = '';
  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byRegion.countries;
    this.initialValue = this._countriesService.cacheStore.byRegion.term;
  }
  seachByRegion(term: string): void {
    this._countriesService.searchByRegion(term).subscribe((countries) => {
      this.countries = [...countries];
    });
  }
}
