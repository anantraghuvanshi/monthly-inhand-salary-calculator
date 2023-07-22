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
  userName: string | null | undefined;

  constructor(private router: Router, public welcomePage: WelcomeComponent) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    if (!this.userName) {
      this.userName = 'Guest';
    }
  }

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
    let taxAmount = 0;
    let checkTaxableSalary = taxableSalary;
    if(checkTaxableSalary <= 550000) return 0;
    else{
        while(checkTaxableSalary > 250000){
            if (checkTaxableSalary > 1000000) {
            taxAmount += (checkTaxableSalary-1000000)*0.3 ;
            checkTaxableSalary = 1000000;
            }
            else if (checkTaxableSalary > 500000) {
            taxAmount += (checkTaxableSalary-500000)*0.2 ;
            checkTaxableSalary = 500000;
            }
            else if (checkTaxableSalary > 250000 ) {
            taxAmount += (checkTaxableSalary-250000)*0.05 ;
            checkTaxableSalary = 250000;
            }
        }
        return taxAmount;
    }
    
  }

  calculateTaxNew(taxableSalary: number): number {
    let taxAmount = 0;
    let checkTaxableSalary = taxableSalary;
    if(checkTaxableSalary <= 750000) return 0;
    else{
        while(checkTaxableSalary > 300000){
            if (checkTaxableSalary > 1500000) {
            taxAmount += (checkTaxableSalary-1500000)*0.3 ;
            checkTaxableSalary = 1500000;
            }
            else if (checkTaxableSalary > 1200000) {
            taxAmount += (checkTaxableSalary-1200000)*0.2 ;
            checkTaxableSalary = 1200000;
            }
            else if (checkTaxableSalary > 900000 ) {
            taxAmount += (checkTaxableSalary-900000)*0.15 ;
            checkTaxableSalary = 900000;
            }
            else if (checkTaxableSalary > 600000 ) {
            taxAmount += (checkTaxableSalary-600000)*0.1 ;
            checkTaxableSalary = 600000;
            }
            else if (checkTaxableSalary > 300000 ) {
            taxAmount += (checkTaxableSalary-300000)*0.05 ;
            checkTaxableSalary = 300000;
            }
        }
        return taxAmount;
    }
  }
}
//   calculateTaxOld(taxableSalary: number): number {
//     if (taxableSalary <= 250000) {
//       return 0;
//     } else if (taxableSalary <= 500000) {
//       return taxableSalary * 0.05;
//     } else if (taxableSalary <= 750000) {
//       return 25000 + (taxableSalary - 500000) * 0.07;
//     } else if (taxableSalary <= 1000000) {
//       return 37500 + (taxableSalary - 750000) * 0.12;
//     } else {
//       return 67500 + (taxableSalary - 1000000) * 0.15;
//     }
//   }

//   calculateTaxNew(taxableSalary: number): number {
//     let tax = 0;
//     if (taxableSalary <= 250000) {
//       tax = 0;
//     } else if (taxableSalary <= 500000) {
//       tax = (taxableSalary - 250000) * 0.05;
//     } else if (taxableSalary <= 750000) {
//       tax = 12500 + (taxableSalary - 500000) * 0.1;
//     } else if (taxableSalary <= 1000000) {
//       tax = 37500 + (taxableSalary - 750000) * 0.15;
//     } else if (taxableSalary <= 1250000) {
//       tax = 75000 + (taxableSalary - 1000000) * 0.2;
//     } else if (taxableSalary <= 1500000) {
//       tax = 125000 + (taxableSalary - 1250000) * 0.25;
//     } else {
//       tax = 187500 + (taxableSalary - 1500000) * 0.3;
//     }

//     return tax;
//   }
// }
