import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { ICountry, Translation } from '../../interfaces/country.interface';

@Component({
  selector: 'by-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit, OnDestroy {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _countriesService = inject(CountriesService);
  private readonly _router = inject(Router);
  private readonly _subscription = new Subscription();
  country?: ICountry;
  url = '';
  translations: Translation[] = [];
  ngOnInit(): void {
    this._subscription.add(
      this._activatedRoute.params
        .pipe(
          switchMap(({ id }) =>
            this._countriesService.searchCoutryByAlphaCode(id)
          )
        )
        .subscribe((country) => {
          if (!country) {
            return this._router.navigateByUrl('');
          }

          this.country = country;
          this.url = `background-image:url("${country.flags.png}")`;
          const keys: string[] = [];
          for (const key in country.translations) {
            keys.push(key);
            const trans = country.translations[key];
            this.translations.push(trans);
          }

          this.translations = this.deleteDuplicates(this.translations);

          return;
        })
    );
  }

  private deleteDuplicates(arr: Translation[]): Translation[] {
    return arr.filter((value, index, self) => {
      const indexFirstAppearance = self.findIndex(
        (item) => item.common === value.common
      );
      return index === indexFirstAppearance;
    });
  }

  goReturn(): void {
    this._router.navigateByUrl('countries');
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
