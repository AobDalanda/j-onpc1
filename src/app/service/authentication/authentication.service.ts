import { Injectable } from '@angular/core';
import {SignInData} from "../../Model/signInData";
import {NavigationExtras, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders(   )
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
 // private readonly mockeduser= new SignInData('bsidy01@aldahim.fr','123');
  isAuthenticated =false;
  connectedUserData:any;
  constructor( private httpClient: HttpClient,private router:Router) { }
  verif=false;


  logUser(signData: SignInData) : boolean{
        let usercredentiels= [
            {
              Mail: signData.email,
              MotDePasse: signData.password
            }];

         this.httpClient  .post('http://127.0.0.1/ONPC/public/users/login',  JSON.stringify(usercredentiels),httpOptions)
            .subscribe(
              result => {
                this.isAuthenticated=true;
               //console.log(JSON.stringify(result));
              // console.log(result);
                this.verif= true;
                this.connectedUserData=result;
                    this.router.navigate(['Accueil']);
              },
              (error) => {
                this.isAuthenticated=false;
               // console.log('Erreur ! : ' + error);
                //this.router.navigate(['']);
                this.verif= false;
              }
            );
          return this.verif;
  }



  logout(){
    this.isAuthenticated=false;
    this.router.navigate(['']);
  }
}
