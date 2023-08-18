import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundComponent } from './shared/components/no-found/no-found.component';
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
    path: '404',
    component: NoFoundComponent,
  },
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
