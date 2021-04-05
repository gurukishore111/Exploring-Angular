import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from './../models/Client';
import { ClientService } from './../../service/client.service';
import { Router } from '@angular/router';
import { Settings } from './../models/Setting';
import { SettingsService } from './../../service/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    balance: 0,
    phone: '',
  };

  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private setting: SettingsService
  ) {}

  disableBalanceOnAdd: boolean = this.setting.getSettings().disableBalanceOnAdd;

  ngOnInit(): void {}

  onSubmit({ valid, value }: any) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if (!valid) {
      //show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      //Add new Client
      this.clientService.newClient(value);

      //show message
      this.flashMessage.show('New client added', {
        cssClass: 'alert-success',
        timeout: 4000,
      });
      //Redireact to dashboard
      this.router.navigate(['/']);
    }
  }
}
