import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../hospital.service";
import {ThemePalette} from "@angular/material/core";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  hospitals;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor(private router: Router, private hospitalService: HospitalService) {
    this.hospitals = this.hospitalService.hospitals;
  }

  ngOnInit(): void {
  }

  toggle(event: MatSlideToggleChange) {
    this.router.navigate(['/hospitalFilter']);
  }

}
