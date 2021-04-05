import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../service/client.service';
import { Client } from './../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalBalance: number;
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
      this.getTotalBalance();
    });
  }

  getTotalBalance() {
    const total = this.clients.reduce((total, client): any => {
      return total + parseFloat(client.balance.toString());
    }, 0);

    this.totalBalance = total;
  }
}
