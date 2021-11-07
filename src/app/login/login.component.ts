import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {SignInData} from "../Model/signInData";
import {Router} from "@angular/router";

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isFormInValid=false;
  areCredentialIsInvalid = false;

  constructor(private authenticationService: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

   onSubmit(signInForm:NgForm){
    //console.log(signInForm.value);
     if(!signInForm.valid){
       this.isFormInValid=true;
       this.areCredentialIsInvalid=false;
       return;
     }
     this.checkCredentials(signInForm);
    //const  signInData= new SignInData(signInForm.value.email,signInForm.value.password);
   }

   private checkCredentials(signInForm : NgForm){
     let  signInData= new SignInData();
        signInData.email=signInForm.value.email;
        signInData.password=signInForm.value.password;
     if(!this.authenticationService.logUser(signInData)){

           this.isFormInValid=false;
           this.areCredentialIsInvalid=true;
           this.router.navigate(['']);
     }else {
         //this.router.navigate(['']);
         this.router.navigate(['Accueil']);
       }
   }




}
