import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SocketIoService } from '../socket-io/socket-io.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private marketData$: any;
  constructor(private socketService: SocketIoService, private httpClient: HttpClient) { }

  set marketDataObservable(_marketData) {
    this.marketData$ = _marketData;
  }

  getStatsStream(): Observable<any> {
    return new Observable((susbcribe) => {
      this.socketService.clientSocket.on('statsChange', (data) => {
        susbcribe.next(data);
      });
    });
  }

  getStatsData(): Observable<any>{
    if(this.marketData$) {
      this.marketData$.unsubscribe();
    }
    return this.httpClient.get(environment.apiUrl+'statsdata', {reportProgress: true});
  }
}
