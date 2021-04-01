import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
 
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService],
})
export class RegistroComponent implements OnInit {

  registerForm= new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
  });

  constructor(private as:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async Registrar()
  {
    const {email, password}=this.registerForm.value;
    try {
      const user = await this.as.registrar(email,password);
      if(user)
      {
        this.router.navigate(['/home']);
      }
      
    } catch (error) {
      
    }
    
  }

}
