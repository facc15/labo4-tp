import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, Output, EventEmitter } from '@angular/core';
//import { auth } from 'firebase/app';
import {AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
//import { User } from 'firebase';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

 
  public user :any={};

  constructor(private afs:AngularFirestore, public afAuth: AngularFireAuth) { 

    this.afAuth.authState.subscribe(u=>{

      console.log("estado:" ,u);

      if(!u)
      {
        return;
      }

      this.user.name=u.displayName;
      this.user.id=u.uid;

    })

  }

  async loguear(email:string, password:string){
    
    try{
      const resultado= await this.afAuth.signInWithEmailAndPassword(email,password);
      return resultado;
    }catch(error){
      console.log(error);
    }
    return "";
  }

  
  async loginWithGoogle()
  {
    try {
      let provider=new firebase.default.auth.GoogleAuthProvider()

      const result= this.afAuth.signInWithPopup(provider);
      return result;
    } catch (error) {
      console.log(error);
    }
    return;
  }


  async registrar(email:string, password:string){

    try{
      const resultado= await this.afAuth.createUserWithEmailAndPassword(email,password);

    return resultado;

    }catch(error){
      return "error";
    }
    return "";
  }

  async desloguear(){
    try{
      this.user={};
      await this.afAuth.signOut();
    }catch(error){
console.log(error);  
  }
    
  }

  getUserLog(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
