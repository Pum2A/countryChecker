import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { MyCountryDataService } from '../my-country-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchText: any;
  users:any;
Math: any;



randomNumber = Math.floor(Math.random() * 10);
// losowa liczba do 10
  constructor(private userData: MyCountryDataService) {}
  ngOnInit(): void {
    this.userData.users().subscribe((data) =>{
       this.users = data;
        
       // podlaczenie sie do api 
       
    })
  }
  }
