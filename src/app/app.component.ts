import { Component, Inject } from '@angular/core';
import { ClickTravelService } from './click-travel.service';
import { IDestination } from './IDestination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choose your dream destination...';
  destinations : IDestination[]

  constructor(private clickTravelService: ClickTravelService) {}

  ngOnInit(): void {
    this.clickTravelService.getDestination().subscribe(res => { console.log(res), this.destinations = res})
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
}
}
