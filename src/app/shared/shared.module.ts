import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MaterialModule } from '../material/material.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchBoxComponent,
  ],
})
export class SharedModule {}
