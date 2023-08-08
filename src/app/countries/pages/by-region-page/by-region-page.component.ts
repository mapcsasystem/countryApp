import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'by-region',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss'],
})
export class ByRegionPageComponent {
  private readonly _countriesService = inject(CountriesService);
  countries: ICountry[] = [];
  term = '';
  seachByRegion(region: string): void {
    this._countriesService.searchByRegion(region).subscribe((countries) => {
      this.countries = [...countries];
      this.term = region;
    });
  }
}
