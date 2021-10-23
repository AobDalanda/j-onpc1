import { Injectable } from '@angular/core';
import {SignInData} from "../../src/app/Model/signInData";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockeduser= new SignInData('bsidy01@aldahim.fr','123');
  isAuthenticated =false;
  constructor(private router:Router) { }


  authenticate(signData: SignInData): boolean{
    if(this.checkCredentials(signData)){
      this.isAuthenticated=true;
      this.router.navigate(['Accueil']);
      return true;
    }
    this.isAuthenticated=false;
    return false;
  }
  private checkCredentials(signInData:SignInData):boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword())

  }

  private checkEmail (email: string): boolean{
        return email ===this.mockeduser.getEmail();
  }

  private checkPassword(password: string):boolean{
       return  password===this.mockeduser.getPassword();
  }

  logout(){
    this.isAuthenticated=false;
  }
}
