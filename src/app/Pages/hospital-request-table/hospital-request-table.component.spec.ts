import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalRequestTableComponent } from './hospital-request-table.component';

describe('HospitalRequestTableComponent', () => {
  let component: HospitalRequestTableComponent;
  let fixture: ComponentFixture<HospitalRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalRequestTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
