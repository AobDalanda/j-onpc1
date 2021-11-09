import {User} from "../../Model/User/User.model";
import {Observable, Subject} from "rxjs";
import {SignInData} from "../../Model/signInData";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
const httpOptions = {
  headers: new HttpHeaders(   )
};
@Injectable({
  providedIn: 'root'
})
 export class UserService {
 readonly apiURL='http://localhost/ONPC/public/userStatusChange';
  readonly  apiURLAdd =`${environment.API_URL}/ONPC/public/users/ajouter`;
  readonly apiURLUpdate =`${environment.API_URL}/ONPC/public/users/ajouter`;
  readonly apiURLConsulteUser =`${environment.API_URL}/ONPC/public/users/detail`;
   newUser= new User();
   verif=false;
   verif1=false;
   constructor( private httpClient: HttpClient ) { }

            createUser( user: User):Observable<User>{
              return this.httpClient.post<User>(this.apiURLAdd, user);
            }

            updateUser(user :User) : Observable<User>
            {
              return this.httpClient.put<User>(this.apiURLUpdate, user);
            }

            consulterUser(id: number): Observable<User> {
              return this.httpClient.get<User>(`${this.apiURLConsulteUser}/${id}`);
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
