import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {User} from "../../Model/User/User.model";
import {Router} from "@angular/router";

@Component({
  selector: 'cf-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newUser= new User();
  message!:string;
  constructor(private userservice : UserService,private router:Router) { }

  ngOnInit(): void {
  }

          addUser(){
            this.userservice.createUser(this.newUser).subscribe(prod => {
              console.log(prod);
            });
            this.router.navigate(['listeUser']);
          }


}
