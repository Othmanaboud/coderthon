import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBloodRequestComponent } from './hospital-blood-request.component';

describe('HospitalBloodRequestComponent', () => {
  let component: HospitalBloodRequestComponent;
  let fixture: ComponentFixture<HospitalBloodRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalBloodRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalBloodRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
