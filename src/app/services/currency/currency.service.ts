import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { ICurrencyMarketData } from 'src/app/models/syncoption';
import { environment } from 'src/environments/environment';
import { SocketIoService } from '../socket-io/socket-io.service';
import { StatsService } from '../stats/stats.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private socketService: SocketIoService, private httpClient: HttpClient) { }

  getCurrencyStream(): Observable<any> {
    return new Observable((susbcribe) => {
      this.socketService.clientSocket.on('marketChange', (data) => {
        susbcribe.next(data);
      });
    });
  }

  getCurrencyData(): Observable<any> {
    return this.httpClient.get(environment.apiUrl+'marketdata', {reportProgress: true});
  }
}
