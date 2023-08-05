import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SalaryCalculatorComponent } from './salary-calculator-component';
import { of } from 'rxjs';
import { WelcomeComponent } from '../welcome-page/welcome-page.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

class WelcomeComponentMock {}

describe('SalaryCalculatorComponent', () => {
  let component: SalaryCalculatorComponent;
  let fixture: ComponentFixture<SalaryCalculatorComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SalaryCalculatorComponent,
        HeaderComponent,
        FooterComponent,
      ],
      imports: [MatDialogModule, FormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: WelcomeComponent, useClass: WelcomeComponentMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCalculatorComponent);
    dialog = TestBed.inject(MatDialog);
    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of({}),
    } as MatDialogRef<typeof component>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should calculate monthly salary correctly', () => {
  //   component.basePay = 1200000;
  //   component.providentFund = 100000;
  //   component.tax = 100000;
  //   component.calculateMonthlySalary();
  //   expect(Math.round(component.monthlySalary)).toBe(91667);
  // });

  // it('should calculate tax correctly in old regime', () => {
  //   component.basePay = 1200000;
  //   component.providentFund = 100000;
  //   component.taxRegime = 'old';
  //   component.calculateTax();
  //   expect(Math.round(component.tax)).toBe(100000);
  // });

  // it('should calculate tax correctly in new regime', () => {
  //   component.basePay = 1200000;
  //   component.providentFund = 100000;
  //   component.taxRegime = 'new';
  //   component.calculateTax();
  //   expect(Math.round(component.tax)).toBe(0);
  // });

  it('should reset output correctly', () => {
    component.taxMessage = 'Tax Message';
    component.salaryMessage = 'Salary Message';
    component.resetOutput();
    expect(component.taxMessage).toBeNull();
    expect(component.salaryMessage).toBeNull();
  });

  it('should validate provident fund correctly', () => {
    component.basePay = 1200000;
    component.providentFund = 100000;
    const result = component.validateProvidentFund();
    expect(result).toBeNull();
  });

  it('should set taxRegimeError to null when checkTaxRegime is called', () => {
    component.taxRegime = 'new';
    component.checkTaxRegime();
    expect(component.taxRegimeError).toBeNull();
  });

  it('should validate provident fund if negative', () => {
    component.basePay = 1200000;
    component.providentFund = -100000;
    const result = component.validateProvidentFund();
    expect(result).toBe("PF can't be negative.");
  });

  it('should validate provident fund if greater than 80% of base pay', () => {
    component.basePay = 100000;
    component.providentFund = 90000;
    const result = component.validateProvidentFund();
    expect(result).toBe("PF can't be greater than 80% of base pay.");
  });

  it('should calculate tax correctly in old regime with taxableSalary less than 550000', () => {
    component.basePay = 550000;
    component.providentFund = 0;
    component.taxRegime = 'old';
    component.calculateTax();
    expect(Math.round(component.tax)).toBe(0);
  });

  it('should calculate tax correctly in new regime with taxableSalary less than 750000', () => {
    component.basePay = 750000;
    component.providentFund = 0;
    component.taxRegime = 'new';
    component.calculateTax();
    expect(Math.round(component.tax)).toBe(0);
  });
});
