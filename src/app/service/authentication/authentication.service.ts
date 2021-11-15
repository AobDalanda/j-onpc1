import { Injectable } from '@angular/core';
import {SignInData} from "../../Model/signInData";
import {NavigationExtras, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../Model/User/User.model";
import {environment} from "../../../environments/environment";
import {Userlog} from "../../Model/User/Userlog.model";


const httpOptions = {
  headers: new HttpHeaders(   )
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  readonly  appiURLLogin =`${environment.API_URL}/ONPC/public/users/login`;
  isAuthenticated =false;
  connectedUserData:any;

  readonly  apiURLogin=`${environment.API_URL}/users/login`;

  constructor( private httpClient: HttpClient,private router:Router) { }
  verif=false;
  retourlog!: string;
  save(data:any){
    sessionStorage.setItem('dataUser',data);
    sessionStorage.setItem('isauthentified','true');
  }

      logUser1(signData:Userlog): Observable<User>{
        return this.httpClient.post<User>(this.appiURLLogin, signData)
      }


  logUser(signData:Userlog) : boolean{
         this.httpClient  .post(this.apiURLogin,   JSON.stringify(signData),httpOptions)
            .subscribe(
              result => {
                this.isAuthenticated=true;
                console.log(JSON.stringify(result));
                this.retourlog=JSON.stringify(result);
                //console.log( (result[0].Status).toString() );
                this.verif= true;
                this.connectedUserData=result;
                this.save(this.connectedUserData);
                    this.router.navigate(['Accueil']);
              },
              (error) => {
                this.isAuthenticated=false;
               console.log('Erreur ! : ' + error);
                //this.router.navigate(['']);
                this.verif= false;
              }
            );
          return this.verif;
  }




  logout(){
    this.isAuthenticated=false;
     sessionStorage.clear();
    this.router.navigate(['']);
  }
}
