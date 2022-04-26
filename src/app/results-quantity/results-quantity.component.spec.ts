import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsQuantityComponent } from './results-quantity.component';

describe('ResultsQuantityComponent', () => {
  let component: ResultsQuantityComponent;
  let fixture: ComponentFixture<ResultsQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
