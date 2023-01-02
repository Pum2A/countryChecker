import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCountryDataService {

  constructor(private http:HttpClient) { }
  url =  'https://restcountries.com/v3.1/all'

  users(){
    return this.http.get(this.url);
  }

  
}
