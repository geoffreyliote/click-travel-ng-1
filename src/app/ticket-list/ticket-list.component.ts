import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../ITicket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
title = "Choose a Ticket"
tickets: ITicket[]
  constructor(private route: ActivatedRoute, private tickerService : TicketService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tickerService.getDestination(params['code']).subscribe(res => {console.log(res), this.tickets = res})
    })
  }

}
