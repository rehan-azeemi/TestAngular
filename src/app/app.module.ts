import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AgendaAppComponent } from './agenda-app/agenda-app.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AgendaAppComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
