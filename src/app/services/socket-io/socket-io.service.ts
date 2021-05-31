import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  public clientSocket: any;
  constructor() { 
    this.clientSocket = io(environment.apiUrl);
  }
  
  listenToServer():Observable<any> {
    return new Observable((subscribe) => {
      this.clientSocket.on('connect', (data) => {
        subscribe.next(data);
      });
    });
  }

  emitToServer(eventName: string, data: any= {}) {
    this.clientSocket.emit(eventName, data);
  }
}
