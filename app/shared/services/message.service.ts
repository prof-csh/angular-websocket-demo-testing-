import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'wss://uixd.co.uk:50001';

@Injectable()
export class MessageService {
  public messages: Subject<any>;

  constructor(_websocket: WebsocketService) {
    this.messages = <Subject<any>>_websocket
      .connect(CHAT_URL)
      .map((response: MessageEvent): any => {
        return response.data;
      });
  }
}
