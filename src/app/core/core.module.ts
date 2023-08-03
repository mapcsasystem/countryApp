import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, ContactPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [HomePageComponent, AboutPageComponent, ContactPageComponent],
})
export class CoreModule {}
