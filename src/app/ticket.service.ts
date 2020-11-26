import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket } from './ITicket';

const httpOptions = {
  headers: new HttpHeaders({
          'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  constructor(private http : HttpClient) {}
    getTickets(codeDestination: string) : Observable<ITicket[]> {
     return this.http.get<[ITicket]>(`https://travel-api.clicksomeone.com/tickets?filter=%7B%0A%20%20%22where%22%3A%20%7B%20%22to%22%3A%20%22${codeDestination}%22%20%7D%0A%7D`).pipe();
    }

    getTicket(id: Number) : Observable<ITicket> {
           return this.http.get<ITicket>(`https://travel-api.clicksomeone.com/tickets/${id}`).pipe();
          }
}
