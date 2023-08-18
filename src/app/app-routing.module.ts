import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//! Demostracion de router
// import { HomePageComponent } from './shared/pages/home-page/home-page.component';
// import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
// import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  //! Demostracion de router
  // {
  //   path: 'home',
  //   component: HomePageComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent,
  // },
  // {
  //   path: 'contact',
  //   component: ContactPageComponent,
  // },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountriesModule),
  },
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'countries',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
