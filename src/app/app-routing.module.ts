import { ListGamesComponent } from './list-games/list-games.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [

  {path:'home/',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'quien-soy',component:QuienSoyComponent},
  {path:'registro',component:RegistroComponent},
  {path:'chat',component:ChatComponent},
  {path:"" ,redirectTo: '/home',pathMatch:'full'},

  {path: 'list-games', loadChildren: () => import('./list-games/list-games.module').then(m => m.ListGamesModule) },
  {path:'**',component: HomeComponent}

  // crea modulo y no se adhiere a la rut.
  //ng generate module list-games --router list-games --module app.module

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
