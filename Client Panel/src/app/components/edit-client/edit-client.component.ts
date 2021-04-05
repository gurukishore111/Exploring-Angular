import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../service/client.service';
import { Client } from './../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from './../../service/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0,
  };
  disabledBalanceOnEdit: boolean = true;
  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private settings: SettingsService
  ) {}

  ngOnInit(): void {
    this.disabledBalanceOnEdit = this.settings.getSettings().disableBalanceOnEdit;
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe((client) => {
      this.client = client;
    });
  }

  onSubmit({ value, valid }: any) {
    if (!valid) {
      //show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      //Add new Client
      value.id = this.id;
      this.clientService.updateClient(value);
      //show message
      this.flashMessage.show('Updated client Successfull', {
        cssClass: 'alert-success',
        timeout: 4000,
      });
      //Redireact to dashboard
      this.router.navigate([`/client/${this.id}`]);
    }
  }
}
