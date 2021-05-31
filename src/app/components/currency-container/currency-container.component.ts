import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import {ICurrencyData, ICurrencyMarketData} from 'src/app/models/syncoption';
import { StatsService } from 'src/app/services/stats/stats.service';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.scss']
})
export class CurrencyContainerComponent implements AfterViewInit  {
  displayedColumns: string[] = ["name", "bid", "ask", "onedaychange"];
  currencyMarketData: Observable<ICurrencyMarketData>;
  public marketData: ICurrencyData[] = [];
  public filterType: string = 'all';
  public dataLoaded = false;

  constructor(private currencyService: CurrencyService, private statsService: StatsService) {
   }

  ngAfterViewInit() {
    this.currencyMarketData = this.currencyService.getCurrencyStream();
    this.currencyMarketData.subscribe((data) => {
      this.processData(data.data);
    });
  }

  processData(data) {
      if(this.filterType === 'all') {
        this.marketData = data;
      } else {
        this.marketData = data.filter((marketData) => marketData.type === this.filterType);  
      }
      this.dataLoaded = true;
  }

  applyFilter(event) {
    this.dataLoaded = false;
    this.filterType = event.value;
  }

  public getMarketData() {
    this.dataLoaded = false;
    const marketDataSubscribe = this.currencyService.getCurrencyData().subscribe((data) => {
      this.processData(data.data);
    });
    this.statsService.marketDataObservable = marketDataSubscribe;
  }

}
