import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome-page/welcome-page.component';
import { SalaryCalculatorComponent } from './salary-calculator-component/salary-calculator-component';
import { AboutComponent } from './about/about.component';
import { FeedBackComponent } from './feed-back/feed-back.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'salary-calculator', component: SalaryCalculatorComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'feed-back',
    component: FeedBackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
