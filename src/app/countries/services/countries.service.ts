import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { ICountry } from '../interfaces/country.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = environment.apiUrl;

  searchByCapital(capital: string): Observable<ICountry[]> {
    return this._http
      .get<ICountry[]>(`${this._apiUrl}/capital/${capital}`)
      .pipe(catchError((error) => of([])));
  }

  searchByCountry(name: string): Observable<ICountry[]> {
    return this._http
      .get<ICountry[]>(`${this._apiUrl}/name/${name}`)
      .pipe(catchError((error) => of([])));
  }

  searchByRegion(region: string): Observable<ICountry[]> {
    return this._http
      .get<ICountry[]>(`${this._apiUrl}/region/${region}`)
      .pipe(catchError((error) => of([])));
  }

  searchCoutryByAlphaCode(code: string): Observable<ICountry | null> {
    return this._http.get<ICountry[]>(`${this._apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }
}
