import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SalaryCalculatorComponent } from './salary-calculator-component';

describe('SalaryCalculatorComponent', () => {
  let component: SalaryCalculatorComponent;
  let fixture: ComponentFixture<SalaryCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SalaryCalculatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate tax for old regime', () => {
    component.basePay = 1000000;
    component.providentFund = 0;
    component.taxRegime = 'old';
    component.calculateTax();
    expect(component.tax).toEqual(112500);
  });

  it('should calculate tax for new regime', () => {
    component.basePay = 1000000;
    component.providentFund = 0;
    component.taxRegime = 'new';
    component.calculateTax();
    expect(component.tax).toEqual(75000);
  });

  it('should calculate monthly salary', () => {
    component.basePay = 1000000;
    component.providentFund = 0;
    component.taxRegime = 'new';
    expect(component.calculateMonthlySalary()).toEqual(72916.66666666667);
  });
});
