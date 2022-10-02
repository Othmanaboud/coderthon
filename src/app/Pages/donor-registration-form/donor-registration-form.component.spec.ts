import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorRegistrationFormComponent } from './donor-registration-form.component';

describe('DonorRegistrationFormComponent', () => {
  let component: DonorRegistrationFormComponent;
  let fixture: ComponentFixture<DonorRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
