import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalFilterComponent } from './hospital-filter.component';

describe('HospitalFilterComponent', () => {
  let component: HospitalFilterComponent;
  let fixture: ComponentFixture<HospitalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
