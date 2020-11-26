import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [	
    AppComponent,
    LogoComponent,
    TicketListComponent,
      HomeComponent,
      TicketComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
