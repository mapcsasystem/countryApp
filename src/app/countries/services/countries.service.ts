import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { ICountry } from '../interfaces/country.interface';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  searchByCapital(term: string): Observable<ICountry[]> {
    return this.http
      .get<ICountry[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(catchError((error) => of([])));
  }

  searchByCountry(term: string): Observable<ICountry[]> {
    return this.http
      .get<ICountry[]>(`${this.apiUrl}/name/${term}`)
      .pipe(catchError((error) => of([])));
  }

  searchByRegion(term: string): Observable<ICountry[]> {
    return this.http
      .get<ICountry[]>(`${this.apiUrl}/region/${term}`)
      .pipe(catchError((error) => of([])));
  }
}
