import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {SignInData} from "../Model/signInData";
import {Router} from "@angular/router";
import {Userlog} from "../Model/User/Userlog.model";

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isFormInValid=false;
  message!:string;
  userdata:any;
  areCredentialIsInvalid = false;

  constructor(private authenticationService: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('isauthentified')){
      this.userdata=sessionStorage.getItem('dataUser'),
      this.router.navigate(['Accueil']);
    }
  }

   onSubmit(signInForm:NgForm){
     if(!signInForm.valid){
       this.isFormInValid=true;
       this.areCredentialIsInvalid=false;
       return;
     }
     this.checkCredentials(signInForm);
    //const  signInData= new SignInData(signInForm.value.email,signInForm.value.password);
   }

   private checkCredentials(signInForm : NgForm){
     let  signInData= new Userlog();
        signInData.mail=signInForm.value.email;
        signInData.MotDePasse=signInForm.value.password;
     this.authenticationService.logUser(signInData)
      //console.log(this.authenticationService.retourlog);
     console.log("login return :"+ JSON.stringify(this.authenticationService.retourlog, null, "    "));
     if(this.authenticationService.retourlog==='compte désactive')
     {
       this.message='Votre compte est désativé';
       console.log("message alerte"+this.message);
       this.isFormInValid=false;
       this.areCredentialIsInvalid=true;
       this.router.navigate(['']);
     }else if(this.authenticationService.retourlog==='not ok'){
       this.message='Identifiant ou mot de passe incorrect';
       this.isFormInValid=false;
       this.areCredentialIsInvalid=false;
       console.log("message alerte"+this.message);
       this.router.navigate(['']);
     }else {
         //this.router.navigate(['']);
         this.router.navigate(['Accueil']);
       }
   }




}
