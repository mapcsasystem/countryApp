import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { ICountry } from '../interfaces/country.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}

  searchByCapital(term: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.apiUrl}/capital/${term}`);
  }
}
