import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientsComponent } from './../clients/clients.component';
import { AuthService } from './../../service/auth.service';
import { SettingsService } from './../../service/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean;
  loggedInUser: string;
  showRegister: boolean;
  isLoggedIn: boolean;
  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private setting: SettingsService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.showRegister = this.setting.getSettings().allowRegistration;
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  onLogoutClick() {
    this.auth.logout();
    this.flashMessage.show('You are now Logged out', {
      cssClass: 'alert-success',
      timeout: 4000,
    });
    this.router.navigate(['/login']);
  }
}
