import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { FQComponent } from './pages/layout/f-q/f-q.component';
import { RegisterComponent } from './pages/register/register.component';
import { StepperComponent } from './pages/layout/stepper/stepper.component';
import { WiifmBenefitsComponent } from './pages/layout/wiifm-benefits/wiifm-benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    FQComponent,
    RegisterComponent,
    StepperComponent,
    WiifmBenefitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
