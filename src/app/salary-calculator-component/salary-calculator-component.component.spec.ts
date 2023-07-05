import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCalculatorComponentComponent } from './salary-calculator-component.component';

describe('SalaryCalculatorComponentComponent', () => {
  let component: SalaryCalculatorComponentComponent;
  let fixture: ComponentFixture<SalaryCalculatorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryCalculatorComponentComponent]
    });
    fixture = TestBed.createComponent(SalaryCalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
