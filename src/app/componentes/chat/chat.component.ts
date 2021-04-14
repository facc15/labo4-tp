import { ChatService } from 'src/app/services/chat.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ ChatService],
})
export class ChatComponent implements OnInit {

  message:string="";
  element:any;
  constructor(private af : AngularFirestore, public cs: ChatService) {
    
    this.cs.loadChats()
           .subscribe(()=>{


            setTimeout(()=>{ 
                //que apunte al final del chat
                this.element.scrollTop=this.element.scrollHeight;
                //20 milesimas de segundo.
             },20);

          
           });
    
   }

  ngOnInit(): void {
    this.element=document.getElementById('idMessage');
  }

  sendMessage()
  {
    if(this.message.length===0)
    {
      return;
    }
    this.cs.addMessage(this.message)
           .then( ()=>this.message="") 
           .catch (    (e)=>console.log("Error",e));

  }
  
}
