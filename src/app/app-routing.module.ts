import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome-page/welcome-page.component';
import { SalaryCalculatorComponent } from './salary-calculator-component/salary-calculator-component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'salaryCalculator', component: SalaryCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
