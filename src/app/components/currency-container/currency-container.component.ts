import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import {ICurrencyMarketData} from 'src/app/models/syncoption';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.scss']
})
export class CurrencyContainerComponent implements OnInit {
  displayedColumns: string[] = ["Currency", "Value"];
  currencyMarketData: Observable<ICurrencyMarketData>;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyMarketData = this.currencyService.getCurrencyStream();
  }

}
