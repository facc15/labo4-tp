import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  choice!:string;
  places!:any[][];

  constructor() {
    this.places=new Array();

    this.places.push([true,true,true]);
    this.places.push([true,true,true]);
    this.places.push([true,true,true]);
  


  }

  ngOnInit(): void {
    
  }

  toPlay(y:number,x:number)
  {
    switch (y) {
      case 0:
              switch (x) {
                case 0:
                  if(this.places[0][0])
                (<HTMLInputElement>document.getElementById("row1col1")).innerHTML="O";
                  
                  break;
                case 1:
                  
                  break;
                case 2:
                  
                  break;
              
                default:
                  break;
              }
        
        break;
      case 1:
              switch (x) {
                case 0:
                  
                  break;
                case 1:
                  
                  break;
                case 2:
                  
                  break;
              
                default:
                  break;
              }
        
        break;
      case 2:
              switch (x) {
                case 0:
                  
                  break;
                case 1:
                  
                  break;
                case 2:
                  
                  break;
              
                default:
                  break;
              }
        
        break;
    
      default:
        break;
    }

 
  }
  
}
