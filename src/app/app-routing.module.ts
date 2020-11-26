import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path: '', redirectTo:'/home' , pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tickets/:code', component: TicketListComponent},
  {path: 'ticket/:number', component: TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
