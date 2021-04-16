import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css']
})
export class RockPaperScissorsComponent implements OnInit {

  score:number;
  scoreComputer:number;
  choiceComputer:number;
  inGame:boolean=true;
  finish:boolean=true;
  result!:any;
  resultComputer!:any;
  prueba!:any;
  

  constructor(private router:Router) {
    this.choiceComputer=0;
    this.score=0;
    this.scoreComputer=0;
   }

  ngOnInit(): void {
  }

  toPlay(choice:string)
  {
    const rockImage ="../../../../assets/images/r.png";
    const paperImage='../../../../assets/images/p.png';
    const scissorsImage='../../../../assets/images/s.png';
    this.choiceComputer=this.getRandomInt(1,4);

    
    

    if(choice=="scissors")
    this.result=scissorsImage;
    else if(choice=="rock")
    this.result=rockImage;
    else if(choice=="paper")
    this.result=paperImage;
    



    if(this.choiceComputer==1)
    this.resultComputer=rockImage;
    else if(this.choiceComputer==2)
    this.resultComputer=paperImage;
    else
    this.resultComputer=scissorsImage;
   

   
    
    if(choice=="rock" && this.choiceComputer==1)
      return;

    if(choice=="paper" && this.choiceComputer==2)
      return;

    if(choice=="scissors" && this.choiceComputer==3)
      return;

    switch (choice) {
      case "rock":
                    switch (this.choiceComputer) {
                      case 2:
                            this.scoreComputer=this.scoreComputer+1;
                        break;
                      case 3:
                            this.score=this.score+1;
                        break;
                    
                      default:
                        break;
                    }

        break;
      case "paper":
                    switch (this.choiceComputer) {
                        case 1:
                            this.score=this.score+1;
                        break;
                        case 3:
                            this.scoreComputer=this.scoreComputer+1;
                        break;
                    
                        default:
                        break;
                    }

          
        break;
      case "scissors":
                      switch (this.choiceComputer) {
                        case 1:
                            this.scoreComputer=this.scoreComputer+1;
                        break;
                        case 2:
                            this.score=this.score+1;
                        break;
                    
                        default:
                        break;
                    }
        
          
        break;
    
      default:
        break;
    }

    if(this.score==5 || this.scoreComputer==5)    
      this.inGame=false;
      


  }

  getRandomInt(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  playAgain()
  {
    this.score=0;
    this.scoreComputer=0;
    this.inGame=true;
    this.choiceComputer=0;
  }

  comeBack()
  {
    this.router.navigate(['/list-games']);
  }
  /*

  toBegan()
  {
    document.querySelector('div').addEventListener('click', toPlay());
  }*/

  

}
