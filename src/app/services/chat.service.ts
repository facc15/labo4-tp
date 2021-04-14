import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

import { map } from 'rxjs/operators';
import { Chats } from './../componentes/interfaces/user-log-i/chats.interface';
import { Observable } from 'rxjs';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/firestore';
//import {}from 'angularfire2/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ChatService {

  private itemsCollection;
  public chats:Chats[]=[];

  public user:any={};

  constructor(private fs:AngularFirestore, public afAuth: AngularFireAuth) {

  this.afAuth.authState.subscribe(user=>{

    if(!user)
    {
      return;
    }

    this.user.name=user.displayName;
    this.user.email=user.email;
    this.user.id=user.uid;
  });

  this.itemsCollection=this.fs.collection<Chats>('chats',ref=>ref.orderBy('date','desc').limit(10));
   }


   
   loadChats()
   {

    return this.itemsCollection.valueChanges()
                                .pipe(map((messages:Chats[])=>{
                                  //limpio
                                  this.chats=[];

                                  for(let message of messages)
                                  {
                                    //inserta al principio del array
                                    this.chats.unshift(message);
                                  }
                                  //this.chats=messages;

                                
                                }))
   }


   addMessage(text:string)
   {
    let dayAndHour=new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString();
     let chat: Chats={

              name:this.user.name,
              email: this.user.email,
              message:text,
              date: new Date().getTime(),
              time: dayAndHour,
              id: this.user.id
     }

     //recupero el id del div contenedor del chat 
     var scrollDiv= <HTMLOutputElement>document.getElementById("idChat");
     //pongo el scroll en el fondo
     scrollDiv.scrollTop=scrollDiv.scrollHeight;
     //guardo en firebase
     return this.itemsCollection.add(chat);

   }

}
