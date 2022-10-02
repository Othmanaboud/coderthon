import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerRegisterFormComponent } from './donner-register-form.component';

describe('DonnerRegisterFormComponent', () => {
  let component: DonnerRegisterFormComponent;
  let fixture: ComponentFixture<DonnerRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnerRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonnerRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
