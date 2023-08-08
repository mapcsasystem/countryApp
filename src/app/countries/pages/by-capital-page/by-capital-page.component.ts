import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';

@Component({
  selector: 'by-capital',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss'],
})
export class ByCapitalPageComponent {
  private countriesService = inject(CountriesService);
  countries: ICountry[] = [];
  term = '';
  seachByCapital(term: string): void {
    this.countriesService.searchByCapital(term).subscribe((countries) => {
      this.countries = [...countries];
      this.term = term;
    });
  }
}
