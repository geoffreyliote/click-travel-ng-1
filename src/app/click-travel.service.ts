import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IDestination } from './IDestination';



const httpOptions = {
  headers: new HttpHeaders({
          'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  constructor(private http : HttpClient) {}
    getDestination() : Observable<IDestination[]> {

     return (this.http.get<[IDestination]>('https://travel-api.clicksomeone.com/destinations')).pipe(map(item => item.filter(item => item.isDreamDestination === true)))
    }
  }
