import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome-page/welcome-page.component';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator-component.css'],
})
export class SalaryCalculatorComponent implements OnInit {
  taxableSalary!: number;
  providentFund!: number;
  taxRegime!: string;
  tax!: number;
  basePay!: number;
  monthlySalary!: number;

  constructor(private router: Router, public welcomePage: WelcomeComponent) {}

  ngOnInit() {}

  calculateTax() {
    const taxableSalary = this.basePay - this.providentFund;
    if (this.taxRegime === 'old') {
      this.tax = this.calculateTaxOld(taxableSalary);
    } else {
      this.tax = this.calculateTaxNew(taxableSalary);
    }
  }

  calculateMonthlySalary() {
    this.calculateTax();
    return (this.basePay - this.providentFund - this.tax) / 12;
  }

  calculateTaxOld(taxableSalary: number): number {
    if (taxableSalary <= 250000) {
      return 0;
    } else if (taxableSalary <= 500000) {
      return taxableSalary * 0.05;
    } else if (taxableSalary <= 750000) {
      return 25000 + (taxableSalary - 500000) * 0.07;
    } else if (taxableSalary <= 1000000) {
      return 37500 + (taxableSalary - 750000) * 0.12;
    } else {
      return 67500 + (taxableSalary - 1000000) * 0.15;
    }
  }

  calculateTaxNew(taxableSalary: number): number {
    let tax = 0;
    if (taxableSalary <= 250000) {
      tax = 0;
    } else if (taxableSalary <= 500000) {
      tax = (taxableSalary - 250000) * 0.05;
    } else if (taxableSalary <= 750000) {
      tax = 12500 + (taxableSalary - 500000) * 0.1;
    } else if (taxableSalary <= 1000000) {
      tax = 37500 + (taxableSalary - 750000) * 0.15;
    } else if (taxableSalary <= 1250000) {
      tax = 75000 + (taxableSalary - 1000000) * 0.2;
    } else if (taxableSalary <= 1500000) {
      tax = 125000 + (taxableSalary - 1250000) * 0.25;
    } else {
      tax = 187500 + (taxableSalary - 1500000) * 0.3;
    }

    return tax;
  }
}
