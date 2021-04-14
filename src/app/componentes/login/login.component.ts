import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LogUserService } from 'src/app/services/log-user.service';
import { UserLogI } from '../interfaces/user-log-i/userLog';
import { AuthService } from './../../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, LogUserService],
})
export class LoginComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
  public log=false;

  public user:any;
  public user$: Observable<any> =this.as.afAuth.user;

  public email =new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]);

  public password=new FormControl('',[Validators.required,Validators.minLength(6)]);

  public loginForm=new FormGroup({email:this.email,password:this.password});

  public submitted:boolean=false;

  constructor(private as:AuthService, private router:Router,private lg:LogUserService) { }

  ngOnInit(): void {
    this.user = this.as.getUserLog();
    
  }

  async Loguear()//: Promise<void>
  {
    this.submitted=true;
    const {email,password} = this.loginForm.value;
    try {
      const user = await this.as.loguear(email,password);
   
      let fecha=new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString();
      const objUserForLog: UserLogI = { email, loggedAt: fecha }
      if(user)
      {
        this.lg.saveUserLog(objUserForLog);
        //await this.lg.onSaveContact(this.loginForm.value);
        console.log(objUserForLog.loggedAt);
        this.submitted=false;
        this.log=true;
        this.router.navigate(['/home',this.log]);
      }
    } catch (error) {
      console.log(error);
      
    }
    

  }

  loginWithGoogle(provider:string)
  {
    console.log(provider);

    this.as.loginWithGoogle(provider);
    this.router.navigate(['/home']);
  }

  
  public GetEmailErrorMessage()
  {
   if(this.email.hasError('required'))
   {
     return "Este campo es requerido";
   }else if(this.email.hasError('pattern'))
   {
     return "Email no valido";
   }
   
   return "";

  }

  public GetPasswordErrorMessage()
  {

    if(this.password.hasError('required'))
    {
      return "Este campo es requerido";
    }else if(this.password.hasError('minlength'))
    {
      return "La contraseña debe contener 6 o mas caracteres "; 
    } 
    return "";
  }

}
