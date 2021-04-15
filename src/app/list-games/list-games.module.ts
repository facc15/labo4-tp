import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGamesRoutingModule } from './list-games-routing.module';
import { ListGamesComponent } from './list-games.component';
import { TatetiComponent } from './games/tateti/tateti.component';
import { RockPaperScissorsComponent } from './games/rock-paper-scissors/rock-paper-scissors.component';


@NgModule({
  declarations: [ListGamesComponent, TatetiComponent, RockPaperScissorsComponent],
  imports: [
    CommonModule,
    ListGamesRoutingModule
  ]
})
export class ListGamesModule { }
