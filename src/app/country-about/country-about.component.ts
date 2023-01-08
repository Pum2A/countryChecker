import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { MyCountryDataService } from '../my-country-data.service';
import { Country, Language} from '../types/api';




@Component({
  selector: 'app-country-about',
  templateUrl: './country-about.component.html',
  styleUrls: ['./country-about.component.css']
})
export class CountryAboutComponent implements OnInit {

  // searchText: any;
  users:any;
Math: any;
  country$!: Observable<Country>;
  displayName: any;


  



randomNumber = Math.floor(Math.random() * (2 - 2) + 2);

  constructor(private userData: MyCountryDataService, private route: ActivatedRoute) {



  }
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.country$ = this.userData.getCountry(data['user']).pipe(tap(data => console.log(data)))
  
      // console.warn(this.country$)
    })
       
    }

    // displayCurrencies(currencies: Currency[]) {
    //   return currencies.map((currency) => currency.name).join(', ');
    //   console.warn

    // }
  
    displayLanguages(languages: Language[]) {
      return languages.map((language) => language.name).join(', ');
      console.log(this.displayLanguages)
    }
  

  
  
  }