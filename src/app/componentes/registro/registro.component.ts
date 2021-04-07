import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LogUserService } from 'src/app/services/log-user.service';
import { UserLogI } from '../interfaces/user-log-i/userLog';
import { AuthService } from './../../services/auth.service';
 
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService,LogUserService]
})
export class RegistroComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


 

  public email =new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]);

  public password=new FormControl('',[Validators.required,Validators.minLength(6)]);

  public registerForm=new FormGroup({email:this.email,password:this.password});

  public submitted:boolean=false;
  

  constructor(private as:AuthService, private router:Router, private lg: LogUserService) {

   }
  
  ngOnInit(): void {
  }

  async Registrar()
  {
    this.submitted=true;
    const {email, password}=this.registerForm.value;
    try {
      let user = await this.as.registrar(email,password);
  
      let fecha=new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString();
      
      const objUserForLog: UserLogI = { email, loggedAt:fecha }
      
      if(user)
      {
        if(this.registerForm.valid)
        {
          this.lg.saveUserLog(objUserForLog);
          console.log(objUserForLog.loggedAt);
         
          this.submitted=false;
          this.router.navigate(['/home']);

        }
      }else
      {
          this.submitted=false;
        
      }
      
    } catch (error) {
      
    }
   
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
