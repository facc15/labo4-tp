import { TatetiComponent } from './games/tateti/tateti.component';
import { RockPaperScissorsComponent } from './games/rock-paper-scissors/rock-paper-scissors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGamesComponent } from './list-games.component';

const routes: Routes = 
[{ path: '', component: ListGamesComponent },
 {path:'games/rock-paper-scissors',component: RockPaperScissorsComponent},
 {path:'games/tateti',component: TatetiComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGamesRoutingModule { }
