import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocketIoService } from '../socket-io/socket-io.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private socketService: SocketIoService) { }

  getStatsStream(): Observable<any> {
    console.log('getStatsStream');
    return new Observable((susbcribe) => {
      this.socketService.clientSocket.on('statsChange', (data) => {
        console.log('Stats Change Socket', data);
        susbcribe.next(data);
      });
    });
  }
}
