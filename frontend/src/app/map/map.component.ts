import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../hospital.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  hospitals;

  constructor(private hospitalService: HospitalService) {
    this.hospitals = this.hospitalService.hospitals;
  }

  ngOnInit(): void {
  }

}
