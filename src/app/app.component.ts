import {Component} from '@angular/core';
import {AuthenticationService} from "./service/authentication/authentication.service";

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor(public authenticationService: AuthenticationService) {
  }



  logout(){
    this.authenticationService.logout();
    sessionStorage.clear();
  }
}
