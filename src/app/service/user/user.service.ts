import {User} from "../../Model/User.model";
import {Observable, Subject} from "rxjs";
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
  apiURLAdd:string='http://localhost/ONPC/public/users/ajouter';
   newUser= new User();
   verif=false;
   verif1=false;
   constructor( private httpClient: HttpClient ) { }

           createUser( prod: User):Observable<User>{
              return this.httpClient.post<User>(this.apiURLAdd, prod, httpOptions);
            }



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
