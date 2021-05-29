import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICurrencyMarketData } from 'src/app/models/syncoption';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  getCurrencyStream(): Observable<ICurrencyMarketData> {
    return of({data: [
      {name: 'EURUSD', value:1.234},
      {name: 'EURJPY', value:1.334},
      {name: 'USDJPY', value:1.434},
      {name: 'USDGPB', value:1.534},
      {name: 'EURGBP', value:1.634},
    ]})
  }
}
