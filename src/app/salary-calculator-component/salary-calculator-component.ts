import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  calculateTax() {
    const taxableSalary = this.basePay - this.providentFund;
    if (this.taxRegime === 'old') {
      this.tax = this.calculateTaxOld(taxableSalary);
    } else {
      this.tax = this.calculateTaxNew(taxableSalary);
    }
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
    return taxableSalary * 0.3;
  }
}
