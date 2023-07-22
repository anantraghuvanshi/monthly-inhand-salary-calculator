import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaryCalculatorComponent } from './salary-calculator-component/salary-calculator-component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome-page/welcome-page.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaryCalculatorComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [{ provide: WelcomeComponent, useClass: WelcomeComponent }],
  bootstrap: [AppComponent],
})
export class AppModule {}
