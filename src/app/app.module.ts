import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountryModule } from './country/country.module';
import { PersonModule } from './person/person.module';
import { AppRoutingModule } from './routing';

import { AppComponent } from './app.component';
import { AddressComponent } from './address.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CountryModule,
    PersonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded');
  }
}
