import { Injectable } from '@angular/core';
//import { auth } from 'firebase/app';
import {AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
//import { User } from 'firebase';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {

  //public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async loguear(email:string, password:string){
    
    try{
      const resultado= await this.afAuth.signInWithEmailAndPassword(email,password);
      return resultado;
    }catch(error){
      console.log(error);
    }
    return "";
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
      await this.afAuth.signOut();
    }catch(error){
console.log(error);  
  }
    
  }

  getUsuarioLogueado(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
