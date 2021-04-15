import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goRockPaperScissors()
  {
    this.router.navigate(['list-games/games/rock-paper-scissors']);  
  }

}
