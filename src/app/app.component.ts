import { Component } from '@angular/core';
import { User } from '@app/core/models';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(this.login);
    this.title = 'Message Board';
  }

  private login(authenticatedUser) {
    this.currentUser = authenticatedUser;
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  title = 'fe-message-board';
}
