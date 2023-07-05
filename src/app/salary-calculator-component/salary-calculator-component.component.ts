import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator-component.component.html',
  styleUrls: ['./salary-calculator-component.component.css'],
})
export class SalaryCalculatorComponent implements OnInit {
  annualBaseSalary!: number;
  annualPf!: number;
  monthlyInHandSalary!: number;
  taxRegime!: string;

  constructor() {}

  ngOnInit() {
    this.monthlyInHandSalary = 0;
    this.taxRegime = 'new';
  }

  calculateMonthlyInHandSalary() {
    if (this.taxRegime === 'new') {
      this.monthlyInHandSalary = this.calculateMonthlyInHandSalaryNew();
    } else {
      this.monthlyInHandSalary = this.calculateMonthlyInHandSalaryOld();
    }
  }

  calculateMonthlyInHandSalaryNew() {
    const monthlyPf = this.annualPf / 12;
    const taxableSalary = this.annualBaseSalary - monthlyPf;
    const tax = taxableSalary * 0.03;

    return this.annualBaseSalary - tax - monthlyPf;
  }

  calculateMonthlyInHandSalaryOld() {
    const monthlyPf = this.annualPf / 12;
    const taxableSalary = this.annualBaseSalary - monthlyPf;
    const tax = this.calculateTaxOld(taxableSalary);

    return this.annualBaseSalary - tax - monthlyPf;
  }

  calculateTaxOld(taxableSalary: number) {
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
}
