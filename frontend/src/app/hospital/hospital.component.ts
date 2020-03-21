import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  @Input('hospital') hospital:any;

  constructor() { }

  ngOnInit(): void {
  }

}
