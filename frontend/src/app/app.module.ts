import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HospitalComponent } from './hospital/hospital.component';
import {RouterModule, Routes} from "@angular/router";
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import {RegisterComponent} from "./register/register.component";
import { HospitalFilterComponent } from './hospital-filter/hospital-filter.component';
import { HospitalAdminDaysComponent } from './hospital-admin-days/hospital-admin-days.component';
import { HospitalAdminUpdateDayComponent } from './hospital-admin-update-day/hospital-admin-update-day.component';
import {NgMapsCoreModule} from "@ng-maps/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: MapComponent },
  { path: 'map', component: MapComponent },
  { path: 'hospitalList' , component: HospitalListComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'hospitalAdminDays',      component: HospitalAdminDaysComponent },
  { path: 'hospitalAdminUpdateDay:/date',      component: HospitalAdminUpdateDayComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HospitalComponent,
    HospitalListComponent,
    HospitalFilterComponent,
    HospitalAdminDaysComponent,
    HospitalAdminUpdateDayComponent
  ],
  imports: [
    NgMapsCoreModule.forRoot({apiKey: 'AIzaSyAgzoLRMvgPj0Lsg9mhdEoCq9_eYMcAOaw'}),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
