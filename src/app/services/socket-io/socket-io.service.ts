import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  public clientSocket: any;
  constructor() { 
    this.clientSocket = io("http://localhost:3000");
  }
  
  listenToServer():Observable<any> {
    return new Observable((subscribe) => {
      this.clientSocket.on('connect', (data) => {
        console.log('Subscribed', data);
        subscribe.next(data);
      });
    });
  }

  emitToServer(eventName: string, data: any= {}) {
    this.clientSocket.emit(eventName, data);
  }
}
