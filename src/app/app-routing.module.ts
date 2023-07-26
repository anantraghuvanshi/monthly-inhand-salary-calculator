import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome-page/welcome-page.component';
import { SalaryCalculatorComponent } from './salary-calculator-component/salary-calculator-component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'salary-calculator', component: SalaryCalculatorComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
