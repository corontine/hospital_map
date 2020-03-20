import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAdminUpdateDayComponent } from './hospital-admin-update-day.component';

describe('HospitalAdminUpdateDayComponent', () => {
  let component: HospitalAdminUpdateDayComponent;
  let fixture: ComponentFixture<HospitalAdminUpdateDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalAdminUpdateDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAdminUpdateDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
