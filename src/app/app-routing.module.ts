import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryAboutComponent } from './country-about/country-about.component';


const routes: Routes = [

  {
    path:'', pathMatch: 'full', redirectTo:'home',
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: ':user',
    component: CountryAboutComponent,
  },

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
