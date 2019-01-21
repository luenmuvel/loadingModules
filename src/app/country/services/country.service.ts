import { Injectable } from '@angular/core';
import { Country } from '../country';
import { Observable, of } from 'rxjs';

const COUNTRIES = [
  new Country(1, 'India', 'New Delhi', 'INR'),
  new Country(2, 'China', 'Beijing', 'RMB')
];
const countryList$ = of(COUNTRIES);

@Injectable()
export class CountryService {
  getCountries(): Observable<Country[]> {
    return countryList$;
  }
}
