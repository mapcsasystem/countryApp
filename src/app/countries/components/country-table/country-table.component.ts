import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss'],
})
export class CountryTableComponent implements OnInit, OnChanges {
  @Input({ required: true }) countries: ICountry[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<ICountry, MatTableDataSourcePaginator>;
  displayedColumns = [
    '#',
    'icon',
    'flag',
    'country',
    'population',
    'capital',
    'actions',
  ];
  ngOnInit(): void {
    this.addCountries();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.addCountries();
  }

  addCountries(): void {
    this.dataSource = new MatTableDataSource([...this.countries]);
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.itemsPerPageLabel = 'Datos por página';
    this.paginator._intl.lastPageLabel = 'última página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  clickedRows(country: ICountry): void {}
}
