import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {User} from "../../Model/User.model";

@Component({
  selector: 'cf-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userservice : UserService) { }

  ngOnInit(): void {
  }



  onSubmit(createUser : NgForm){
    if(createUser.valid){
      console.log(createUser.value);
      let  usercredentials= new User();
      usercredentials.prenom=createUser.value.prenom;
      usercredentials.nom=createUser.value.nom;
      usercredentials.email=createUser.value.email;
      usercredentials.type_utilisateur=createUser.value.typeuser;
      usercredentials.password=createUser.value.password;
      if(this.userservice.createUser(usercredentials)){
        console.log("insertion ok ");
      }else{console.log("insertion noOk")}
    }else(console.log("pas de saisie "))

  }
}
