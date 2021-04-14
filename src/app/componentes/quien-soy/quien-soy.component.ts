import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  comeHome()
  {
      this.router.navigate(['/home']);  
  }


}
