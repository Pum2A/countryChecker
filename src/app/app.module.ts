import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';




import { AppComponent } from './app.component';
import { CountryAboutComponent } from './country-about/country-about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CountryAboutComponent,
    HomeComponent,
    CustomFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
