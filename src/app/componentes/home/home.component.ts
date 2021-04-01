import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
  
}
