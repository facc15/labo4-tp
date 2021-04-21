import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  choice!:string;
  choiceComputerX!:number;
  choiceComputerY!:number;
  places!:any[][];
  matrix!:any[][];
  isEmpty!:number;
  endGame!:boolean;
  win!:boolean;
  draw!:boolean;
  lose!:boolean;

  constructor(private router:Router) 
  {
    
  this.gameConfig();

  }

  gameConfig()
  {
    this.places=new Array();
    this.matrix=new Array();

    this.matrix.push(["","",""]);
    this.matrix.push(["","",""]);
    this.matrix.push(["","",""]);

    this.places.push([true,true,true]);
    this.places.push([true,true,true]);
    this.places.push([true,true,true]);
    this.isEmpty=9;
    this.endGame=false;
    this.win=false;
    this.lose=false;
    this.draw=false;

  }

  ngOnInit(): void {
    
  }

  letToStart(y:number,x:number)
  {
    this.choiceComputerY=this.getRandomInt(0,3);
    this.choiceComputerX=this.getRandomInt(0,3);

    setTimeout(() => {
      
      this.toPlay(y,x);
    }, 350);

    
  }

  toPlay(y:number,x:number)
  {
    let id=y.toString()+x.toString();

    switch (y) {
      case 0:
              switch (x) {
                case 0:
                  
                  if(this.places[0][0])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[0][0]=false;
                  }else
                  {
                
                    return;
                  }  
               
                  
                  
                  break;
                case 1:
                  if(this.places[0][1])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[0][1]=false;
                  }else
                  {
                    return;
                  }

                  
                  break;
                case 2:
                  if(this.places[0][2])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[0][2]=false;
                  }else
                  {
                    return;
                  }
                  
                  break;
              
                default:
                  break;
              }
        
        break;
      case 1:
        switch (x) {
                case 0:
                  
                  if(this.places[1][0])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[1][0]=false;
                  }else
                  {
                
                    return;
                  }  
               
                  
                  
                  break;
                case 1:
                  if(this.places[1][1])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[1][1]=false;
                  }else
                  {
                    return;
                  }

                  
                  break;
                case 2:
                  if(this.places[1][2])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[1][2]=false;
                  }else
                  {
                    return;
                  }
                  
                  break;
              
                default:
                  break;
              }
             
        
        break;
      case 2:

      switch (x) {
                case 0:
                  
                  if(this.places[2][0])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[2][0]=false;
                  }else
                  {
                
                    return;
                  }  
               
                  
                  
                  break;
                case 1:
                  if(this.places[2][1])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[2][1]=false;
                  }else
                  {
                    return;
                  }

                  
                  break;
                case 2:
                  if(this.places[2][2])
                  {
                    (<HTMLInputElement>document.getElementById(id)).innerHTML="O";
                    this.places[2][2]=false;
                  }else
                  {
                    return;
                  }
                  
                  break;
              
                default:
                  break;
              }
             
        break;
    
      default:
        break;
    }

      this.isEmpty--;

      setTimeout(() => {


        if(this.isEmpty>0)
    {
     

        if(this.toWin("O"))
        {
              
              this.win=true;
              this.endGame=true;
          
  
        }
      

      if(!this.endGame)
      {
        setTimeout(() => {
      
          this.computerToPlay();      
            setTimeout(() => {
  
              if(this.toWin("X"))
              {
                this.lose=true;
                this.endGame=true;
  
              }
            }, 400);
          
        },380);
        
      }
      
     
     
    }else
    {
      if(!this.toWin("O"))
      this.draw=true;
      else
      this.win=true;
      
 
      this.endGame=true;
        
      
    }






        
      },350);
    
    
  }

  toWin(value:string)
  {

    for (let i = 0; i <=2; i++) 
    {

      for (let j = 0; j <=2; j++) 
      {
        let input=(<HTMLElement>document.getElementById(i.toString()+j.toString())).innerHTML;   
        
        if(this.matrix[i][j]=="")
        this.matrix[i][j]=input;
        console.log(i + " + " + j +" "+ " = "+ this.matrix[i][j] + "\n");
      } 
    }

     return this.checkWin(this.matrix,value);
  }

  checkWin(matrix:string[][],value:string)
  {
   if(matrix[0][0]==value && matrix[0][1]==value && matrix[0][2]==value ||
      matrix[0][0]==value && matrix[1][1]==value && matrix[2][2]==value ||
      matrix[0][0]==value && matrix[1][0]==value && matrix[2][0]==value ||
      matrix[0][1]==value && matrix[1][1]==value && matrix[2][1]==value ||
      matrix[0][2]==value && matrix[1][2]==value && matrix[2][2]==value ||
      matrix[1][0]==value && matrix[1][1]==value && matrix[1][2]==value ||
      matrix[0][2]==value && matrix[1][1]==value && matrix[2][0]==value ||
      matrix[2][0]==value && matrix[2][1]==value && matrix[2][2]==value )
    {

      return true;
    }

    return false;

  }

  computerToPlay()
  {
    while(!this.places[this.choiceComputerY][this.choiceComputerX])
    {
      this.choiceComputerY=this.getRandomInt(0,3);
      this.choiceComputerX=this.getRandomInt(0,3);

      
    }

    (<HTMLInputElement>document.getElementById(this.choiceComputerY.toString()+this.choiceComputerX.toString())).innerHTML="X";
    this.places[this.choiceComputerY][this.choiceComputerX]=false;
    this.isEmpty--;
  }

  playAgain() { this.gameConfig(); }

  comeBack() { this.router.navigate(['/list-games']); }

  getRandomInt(min:number, max:number):number { return Math.floor(Math.random() * (max - min)) + min; }

  
}
