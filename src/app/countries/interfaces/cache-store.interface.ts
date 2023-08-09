import { ICountry } from './country.interface';

export interface ICacheStore {
  byCapital: ITermCountries;
  byCoutries: ITermCountries;
  byRegion: ITermCountries;
}

export interface ITermCountries {
  term: string;
  coutries: ICountry[];
}
