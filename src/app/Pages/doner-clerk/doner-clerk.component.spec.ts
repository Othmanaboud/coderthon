import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerClerkComponent } from './doner-clerk.component';

describe('DonerClerkComponent', () => {
  let component: DonerClerkComponent;
  let fixture: ComponentFixture<DonerClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerClerkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonerClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
