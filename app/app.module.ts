import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatIconModule } from '@angular/material';

import { WebSocketService } from './shared/services/websocket.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ 
    AppComponent
  ],
  providers: [
    WebSocketService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
