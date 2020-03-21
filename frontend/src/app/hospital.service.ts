import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  _hospitals = [
    {
      "name" : "Vivantes",
      "lat" : "52.520008",
      "long" : "13.404954",
      "color" : "green",
      "type": "Universitätsklinik",
      "plz" : "61231",
      "city" : "Berlin"
    },
    {
      "name" : "Vivantes",
      "lat" : "53.520008",
      "long" : "11.404954",
      "color" : "green",
      "type": "Universitätsklinik",
      "plz" : "61231",
      "city" : "Berlin"

    },
    {
      "name" : "Vivantes",
      "lat" : "50.520008",
      "long" : "10.404954",
      "color" : "red",
      "type": "Universitätsklinik",
      "plz" : "61231",
      "city" : "Berlin"


    },
  ]

  constructor() { }

  get hospitals() {
    return this._hospitals
  }
}
