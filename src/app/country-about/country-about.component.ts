import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MyCountryDataService } from '../my-country-data.service';
import { Country} from '../types/api';




@Component({
  selector: 'app-country-about',
  templateUrl: './country-about.component.html',
  styleUrls: ['./country-about.component.css']
})
export class CountryAboutComponent implements OnInit {

  users:any;
  Math: any;
  country$!: Observable<Country>;
  displayName: any;



  constructor(private userData: MyCountryDataService, private route: ActivatedRoute) {

    // api z mycountrydata service, a rout z activatedroute



  }
      ngOnInit(): void {


      this.route.params.subscribe(data => {
      this.country$ = this.userData.getCountry(data['user']).pipe(tap(data => console.log(data)))

      // podlaczam sie, subskrybuje date 
  
    })
       
    }

    
  
   
  

  
  
  }