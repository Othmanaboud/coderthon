import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellingComponent } from './cancelling.component';

describe('CancellingComponent', () => {
  let component: CancellingComponent;
  let fixture: ComponentFixture<CancellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
