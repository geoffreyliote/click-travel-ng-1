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
    getDestination(codeDestination: string) : Observable<ITicket[]> {
var param = new HttpParams();
param.set('filter', `{"where": {"to": "${codeDestination}"`)
const httpOptions ={
  params: param
};
     return this.http.get<[ITicket]>(`https://travel-api.clicksomeone.com/tickets?filter=%7B%0A%20%20%22where%22%3A%20%7B%20%22to%22%3A%20%22${codeDestination}%22%20%7D%0A%7D`).pipe();
    }
}
