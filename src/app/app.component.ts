import { Component, OnInit } from '@angular/core';
import { SocketIoService } from './services/socket-io/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'syncoption-frontend';
}
