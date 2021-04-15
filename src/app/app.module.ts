import { AngularFireAuth } from 'angularfire2/auth';
import { ChatService } from './services/chat.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule} from '@angular/fire';

import { AngularFireAuthModule} from '@angular/fire/auth'; 
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './componentes/chat/chat.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    SidebarComponent,
    RegistroComponent,
    NavbarComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule
 ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
