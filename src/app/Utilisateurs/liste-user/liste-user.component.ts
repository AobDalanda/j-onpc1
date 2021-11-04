import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'cf-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  displayedColumns = ['id', 'Prenom', 'Nom', 'TypeUtilisateur','Status', 'Action'];
  dataSource: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    /**
     * Retrieve data for "delegues"
     */
    this.http.get('http://localhost/ONPC/public/userswithNum')
      .subscribe(Response => {
        if(Response){ ;
          this.dataSource=Response;
        }
      });
  }

  editUser(id:number) {
    console.log("edition ok pour l'element avec l'identifiant : "+id);
  }
}
