import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome-page/welcome-page.component';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { OutputDialogComponent } from '../output-dialog/output-dialog.component';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator-component.css'],
})
export class SalaryCalculatorComponent implements OnInit {
  taxableSalary!: number;
  providentFund: number = 0;
  taxRegime!: string;
  tax!: number;
  basePay!: number;
  monthlySalary!: number;
  userName: string | null | undefined;
  taxMessage!: string | null;
  salaryMessage!: string | null;
  taxRegimeError!: string | null;

  constructor(
    private router: Router,
    public welcomePage: WelcomeComponent,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    if (!this.userName) {
      this.userName = 'Guest';
    }
  }
  openDialog(content: string): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      data: { info: content },
    });
  }
  openOutputDialog(content: string): void {
    const dialogRef = this.dialog.open(OutputDialogComponent, {
      data: { info: content },
    });
  }

  calculateMonthlySalary() {
    this.taxRegimeError = null;

    if (!this.taxRegime) {
      this.taxRegimeError = 'Tax regime is required.';
      return;
    }

    if (!this.basePay) {
      return;
    }

    if (this.tax === undefined) {
      this.tax = 0;
    }

    this.monthlySalary = (this.basePay - this.providentFund - this.tax) / 12;
    this.salaryMessage = `${
      this.userName
    }, your Monthly Salary is: ${Math.round(this.monthlySalary)}`;
    this.openOutputDialog(this.salaryMessage);
  }

  calculateTax() {
    this.taxRegimeError = null;

    if (!this.taxRegime) {
      this.taxRegimeError = 'Tax regime is required.';
      return;
    }

    if (!this.basePay) {
      return;
    }

    const taxableSalary = this.basePay - this.providentFund;

    if (this.taxRegime === 'old') {
      this.tax = this.calculateTaxOld(taxableSalary);
    } else {
      this.tax = this.calculateTaxNew(taxableSalary);
    }

    this.taxMessage = `${this.userName}, your calculated tax is: ${Math.round(
      this.tax
    )}`;
    this.openOutputDialog(this.taxMessage);
  }

  calculateTaxOld(taxableSalary: number): number {
    let taxAmount = 0;
    let checkTaxableSalary = taxableSalary;
    if (checkTaxableSalary <= 550000) return 0;
    else {
      if (checkTaxableSalary > 1000000) {
        taxAmount += (checkTaxableSalary - 1000000) * 0.3;
        checkTaxableSalary = 1000000;
      }
      if (checkTaxableSalary > 500000) {
        taxAmount += (checkTaxableSalary - 500000) * 0.2;
        checkTaxableSalary = 500000;
      }
      if (checkTaxableSalary > 250000) {
        taxAmount += (checkTaxableSalary - 250000) * 0.05;
        checkTaxableSalary = 250000;
      }
      return taxAmount;
    }
  }

  calculateTaxNew(taxableSalary: number): number {
    let taxAmount = 0;
    let checkTaxableSalary = taxableSalary;
    if (checkTaxableSalary <= 750000) return 0;
    else {
      if (checkTaxableSalary > 1500000) {
        taxAmount += (checkTaxableSalary - 1500000) * 0.3;
        checkTaxableSalary = 1500000;
      }
      if (checkTaxableSalary > 1200000) {
        taxAmount += (checkTaxableSalary - 1200000) * 0.2;
        checkTaxableSalary = 1200000;
      }
      if (checkTaxableSalary > 900000) {
        taxAmount += (checkTaxableSalary - 900000) * 0.15;
        checkTaxableSalary = 900000;
      }
      if (checkTaxableSalary > 600000) {
        taxAmount += (checkTaxableSalary - 600000) * 0.1;
        checkTaxableSalary = 600000;
      }
      if (checkTaxableSalary > 300000) {
        taxAmount += (checkTaxableSalary - 300000) * 0.05;
        checkTaxableSalary = 300000;
      }
      return taxAmount;
    }
  }

  resetOutput() {
    this.taxMessage = null;
    this.salaryMessage = null;
  }
}
