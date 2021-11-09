import { Component, OnInit } from '@angular/core';
import {User} from "../../Model/User/User.model";
import {UserService} from "../../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'cf-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  currentUser=new User();
  message!:string;
  constructor(private activedRoute: ActivatedRoute,private userservice : UserService,private router:Router) { }

    ngOnInit(): void {
      this.userservice.consulterUser(this.activedRoute.snapshot.params.id).
      subscribe( userinfo =>{
        this.currentUser = userinfo;
      } ) ;
    }



      updateUser(){
        this.userservice.updateUser(this.currentUser).subscribe(prod => {
            this.router.navigate(['listeUser']);
          },(error) => { alert("Problème lors de la modification !"); }
        );

      }

}
