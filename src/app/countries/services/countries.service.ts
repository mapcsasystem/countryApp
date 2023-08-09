import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { ICountry } from '../interfaces/country.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ICacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = environment.apiUrl;

  cacheStore: ICacheStore = {
    byCapital: {
      term: '',
      countries: [],
    },
    byCoutries: {
      term: '',
      countries: [],
    },
    byRegion: {
      term: '',
      countries: [],
    },
  };

  searchByCapital(term: string): Observable<ICountry[]> {
    const url = `${this._apiUrl}/capital/${term}`;
    return this._getCountiesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCapital = {
          term,
          countries,
        };
      })
    );
  }

  searchByCountry(term: string): Observable<ICountry[]> {
    const url = `${this._apiUrl}/name/${term}`;
    return this._getCountiesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCoutries = {
          term,
          countries,
        };
      })
    );
  }

  searchByRegion(term: string): Observable<ICountry[]> {
    const url = `${this._apiUrl}/region/${term}`;
    return this._getCountiesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byRegion = {
          term,
          countries,
        };
      })
    );
  }

  searchCoutryByAlphaCode(code: string): Observable<ICountry | null> {
    const url = `${this._apiUrl}/alpha/${code}`;
    return this._http.get<ICountry[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }

  private _getCountiesRequest(url: string): Observable<ICountry[]> {
    return this._http.get<ICountry[]>(url).pipe(catchError((error) => of([])));
  }
}
