import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import {ICurrencyData, ICurrencyMarketData} from 'src/app/models/syncoption';

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

  constructor(private currencyService: CurrencyService) {
   }

  ngAfterViewInit() {
    this.currencyMarketData = this.currencyService.getCurrencyStream();
    this.currencyMarketData.subscribe((data) => {
      console.log(data.data);
      if(this.filterType === 'all') {
        this.marketData = data.data;
      } else {
        this.marketData = data.data.filter((marketData) => marketData.type === this.filterType);  
      }
    });
  }

  applyFilter(event) {
    this.filterType = event.value;
    if(this.filterType === 'all') {
      this.marketData = this.marketData;
    } else {
      this.marketData = this.marketData.filter((marketData) => marketData.type === this.filterType);  
    }
  }

}
