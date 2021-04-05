import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../service/client.service';
import { Client } from './../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientsComponent } from './../clients/clients.component';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    //Get id form URL
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe((client) => {
      if (client != null) {
        if (client.balance > 0) {
          this.hasBalance = true;
        }
      }
      this.client = client;
      console.log(this.client);
    });
  }
  onDeleteClick() {
    if (confirm('Are you sure to remove ?')) {
      this.clientService.deleteClient(this.client);
      this.flashMessage.show('Client removed!', {
        cssClass: 'alert-success',
        timeout: 400,
      });
      this.router.navigate(['/']);
    }
  }
  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance updated!', {
      cssClass: 'alert-success',
      timeout: 4000,
    });
  }
}
