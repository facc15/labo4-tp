import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  @Input() public estaLog=false; 
  public user:any;
  public user$: Observable<any> =this.as.afAuth.user;

  constructor(private as:AuthService,private router:Router) { }

  async ngOnInit() {
    this.user = await this.as.getUserLog();

    //me devuelve objeto user
    
    if(this.user)
    {
      this.estaLog=true;
      
    }
  }

  async Desloguear()
  {
    try {
      await this.as.desloguear();
      this.router.navigate(["/login"]);
      
    } catch (error) {
      
    }
    
  }


}
