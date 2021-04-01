import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
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

  registerForm= new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
  });

  constructor(private as:AuthService, private router:Router, private lg: LogUserService) { }

  ngOnInit(): void {
  }

  async Registrar()
  {
    const {email, password}=this.registerForm.value;
    try {
      const user = await this.as.registrar(email,password);
      const objUserForLog: UserLogI = { email, loggedAt: new Date().getTime()}
      
      if(user)
      {
        this.router.navigate(['/home']);
        this.lg.saveUserLog(objUserForLog);
      }
      
    } catch (error) {
      
    }
    
  }

}
