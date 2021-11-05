import {User} from "../../Model/User.model";
import {Subject} from "rxjs";
import {SignInData} from "../../Model/signInData";
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
  apiURL:string='http://localhost/ONPC/public/userStatusChange';
   newUser= new User();
   verif=false;
   verif1=false;
   constructor( private httpClient: HttpClient ) { }

         createUser(userdata: User) : boolean{
           this.httpClient  .post('http://localhost/ONPC/public/users/ajouter',  JSON.stringify(userdata),httpOptions)
             .subscribe(
               result => {
                // console.log( result);
                 this.verif=true;
               },
               (error) => {
                 console.log('this.verif;Erreur ! : ' + error);
                 //this.router.navigate(['']);
                 //
               }
             );
           return this.verif;
         };


         activeUserStatus(id:number):boolean{
           const url = `${this.apiURL}/${id}`;
           this.httpClient  .get(url,httpOptions)
             .subscribe(
               result => {
                 console.log('operation ok ');
                 this.verif1= true;
               },
               (error) => {
                 console.log('this.verif;Erreur ! : ' + error);
                 //this.router.navigate(['']);
               }
             );
           return this.verif1;
         }


}
