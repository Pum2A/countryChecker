import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { Country } from './types/api';

@Injectable({
  providedIn: 'root',
})
export class MyCountryDataService {
  httpClient: any;

  constructor(private http: HttpClient) {}
  url = 'https://restcountries.com/v3.1/all';
  urlCountries = 'https://restcountries.com/v3.1/'

  users() {
    return this.http.get<Country[]>(this.url);
  }

  getCountry(name: string) {
    return this.http.get<Country[]>(`${this.urlCountries}/name/${name}`).pipe(map(([res]) => res));
  }

 

  
}
