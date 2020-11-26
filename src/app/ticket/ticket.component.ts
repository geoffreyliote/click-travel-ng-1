import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../ITicket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  title = "Choose a Ticket"
  ticket: ITicket
  constructor(private route: ActivatedRoute, private tickerService : TicketService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tickerService.getTicket(params['number']).subscribe(res => {console.log(res), this.ticket = res})
    })
  }

}
