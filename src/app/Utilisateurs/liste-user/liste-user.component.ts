import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cf-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  displayedColumns = ['id', 'Prenom', 'Nom', 'TypeUtilisateur','Status', 'Action'];
  dataSource: any;
  message!:string;
  constructor(private http:HttpClient, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    /**
     * Retrieve data for "liste of users"
     */
    this.http.get('http://localhost/ONPC/public/userswithNum')
      .subscribe(Response => {
        if(Response){
          this.dataSource=Response;
        }
      });

  }

  editUser(id:number) {
    console.log("edition ok pour l'element avec l'identifiant :"+id);
       if(!this.userService.activeUserStatus(id)){
        // console.log(this.userService.activeUserStatus(id));
         this.message='Modification ok  ';
         //this.router.navigate([this.router.url]);
       // this.router.navigate(['listeUser']);
       }else{
         console.log(this.userService.activeUserStatus(id));
         console.log('resultat insertion'+this.userService.activeUserStatus(id));
         this.message='Echec ';
       }

  }
}
