import {User} from "../Model/User.model";
import {Subject} from "rxjs";
import {SignInData} from "../Model/signInData";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
const httpOptions = {
  headers: new HttpHeaders(   )
};
@Injectable({
  providedIn: 'root'
})
 export class UserService {
   newUser= new User();
   verif=false;
   constructor( private httpClient: HttpClient ) { }

   createUser(userdata: User) : boolean{

     this.httpClient  .post('http://localhost/ONPC/public/users/ajouter',  JSON.stringify(userdata),httpOptions)
       .subscribe(
         result => {
           console.log( result);
           this.verif=true;
         },
         (error) => {
           console.log('this.verif;Erreur ! : ' + error);
           //this.router.navigate(['']);
           //

         }
       );
     return this.verif;
   }

 }
