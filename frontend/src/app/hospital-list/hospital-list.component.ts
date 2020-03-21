import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../hospital.service";

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  hospitals;

  constructor(private hospitalService: HospitalService) {
    this.hospitals = this.hospitalService.hospitals;
  }

  ngOnInit(): void {
  }

}
