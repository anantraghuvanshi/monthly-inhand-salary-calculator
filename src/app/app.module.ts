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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OutputDialogComponent } from './output-dialog/output-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaryCalculatorComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    DialogComponentComponent,
    OutputDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [{ provide: WelcomeComponent, useClass: WelcomeComponent }],
  bootstrap: [AppComponent],
})
export class AppModule {}
