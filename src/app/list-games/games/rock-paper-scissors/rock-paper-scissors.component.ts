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

  constructor(private router:Router) {
    this.choiceComputer=0;
    this.score=0;
    this.scoreComputer=0;
   }

  ngOnInit(): void {
  }

  toPlay(choice:string)
  {
    this.choiceComputer=this.getRandomInt(1,4);

    if(choice=="scissors")
    {
      
      (<HTMLInputElement> document.getElementById("result")).innerHTML='<img class="resultImage" src="../../../../assets/images/s.png" alt="">';
   
    }else if(choice=="rock")
    {
      (<HTMLInputElement> document.getElementById("result")).innerHTML='<img class="resultImage" src="../../../../assets/images/r.png" alt="">';
    }else if(choice=="paper")
    {
      (<HTMLInputElement> document.getElementById("result")).innerHTML='<img class="resultImage" src="../../../../assets/images/p.png" alt="">';
    }
    
    if(this.choiceComputer==1)
    {
      
    (<HTMLInputElement> document.getElementById("computerResult")).innerHTML='<img class="resultImageComputer" src="../../../../assets/images/r.png" alt="">';

    }else if(this.choiceComputer==2)
    {
    (<HTMLInputElement> document.getElementById("computerResult")).innerHTML='<img class="resultImageComputer" src="../../../../assets/images/p.png" alt="">';

    }else
    {
      (<HTMLInputElement> document.getElementById("computerResult")).innerHTML='<img class="resultImageComputer" src="../../../../assets/images/s.png" alt="">';

    }

    if(choice=="rock" && this.choiceComputer==1)
    {
      return;
    }

    if(choice=="paper" && this.choiceComputer==2)
    {
      return;
    }

    if(choice=="scissors" && this.choiceComputer==3)
    {
      return;
    }

    if(choice=="rock")
    {
      if(this.choiceComputer==2)
      {
        this.scoreComputer=this.scoreComputer+1;
      }else if(this.choiceComputer==3)
      {
        this.score=this.score+1;
      }
    }else if(choice=="paper")
    {
      if(this.scoreComputer==1)
      {
        this.score=this.score+1;
      }else if(this.scoreComputer==3)
      {
        this.scoreComputer=this.scoreComputer+1;
      }

    }else
    {
      if(this.scoreComputer==1)
      {
        this.scoreComputer=this.scoreComputer+1;
      }else if(this.scoreComputer==2)
      {
        this.score=this.score+1;
      }
    }

    
    
    if(this.score==5)
    {
      alert("GANASTE!!!!!!!!!!!!!!!!!!!!!!!!!");
      this.router.navigate(['/home']);

    }else if(this.scoreComputer==5)
    {
      alert("PERDISTE !");
      this.router.navigate(['/home']);
    }
    
  }

  getRandomInt(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  /*

  toBegan()
  {
    document.querySelector('div').addEventListener('click', toPlay());
  }*/

  

}
