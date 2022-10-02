import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerTableComponent } from './doner-table.component';

describe('DonerTableComponent', () => {
  let component: DonerTableComponent;
  let fixture: ComponentFixture<DonerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
