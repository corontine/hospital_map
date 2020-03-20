import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAdminDaysComponent } from './hospital-admin-days.component';

describe('HospitalAdminDaysComponent', () => {
  let component: HospitalAdminDaysComponent;
  let fixture: ComponentFixture<HospitalAdminDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalAdminDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAdminDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
