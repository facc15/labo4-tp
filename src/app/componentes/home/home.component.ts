import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
  providers: [AuthService]
})
export class HomeComponent implements OnInit {

  public user:any;
  public user$: Observable<any> =this.as.afAuth.user;
  public actionChat:Boolean=false;

  constructor(private router: Router, private route : ActivatedRoute, private as: AuthService) { }

  ngOnInit() {
    this.user = this.as.getUserLog(); 
    }

  IrALogin()
  {
    this.router.navigate(['/login']);
  }

  IrAQuienSoy()
  {   
      this.router.navigate(['/quien-soy']);  
  }

  IrARegistro()
  {
    this.router.navigate(['/registro']);
  }
  
  IrAJuegos()
  {
    this.router.navigate(['/list-games']);
  }

  openChat()
  {
    if(!this.actionChat)
    this.actionChat=true;
    else
    this.actionChat=false;
  }
}
