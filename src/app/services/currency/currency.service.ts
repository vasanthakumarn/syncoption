import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { ICurrencyMarketData } from 'src/app/models/syncoption';
import { SocketIoService } from '../socket-io/socket-io.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private socketService: SocketIoService) { }

  getCurrencyStream(): Observable<any> {
    return new Observable((susbcribe) => {
      this.socketService.clientSocket.on('marketChange', (data) => {
        console.log('Market Change Socket', data);
        susbcribe.next(data);
      });
    });
  }
}
