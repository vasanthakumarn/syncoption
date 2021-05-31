import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyContainerComponent } from './components/currency-container/currency-container.component';
import { StatsContainerComponent } from './components/stats-container/stats-container.component';
import { ForexContainerComponent } from './components/forex-container/forex-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { GaugeChartModule } from 'angular-gauge-chart';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyContainerComponent,
    StatsContainerComponent,
    ForexContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    GaugeChartModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
