import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { UserLogI } from '../componentes/interfaces/user-log-i/userLog';


@Injectable({
  providedIn: 'root'
})
export class LogUserService {

  private usersLogC: AngularFirestoreCollection<UserLogI>;
  private nameCollectionDB= 'users';
  //obs: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.usersLogC= afs.collection<UserLogI>(this.nameCollectionDB);
   }

   public getAllUsersLogs(): Observable<UserLogI[]> {
    return this.afs.collection(this.nameCollectionDB)
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as UserLogI;
            const id = a.payload.doc.id;

            return { id, ...data };
          })  
        )
      )
  }

  async onSaveContact(contactForm:UserLogI): Promise<void>
  {
    return new Promise(async(resolve,reject)=>{
      try {
        const id=this.afs.createId(); 
        const data={id, ...contactForm};
        const result= this.usersLogC.doc(id).set(data);
        resolve(result);
        
      } catch (error) {
        reject(error.message);
      }
    });
  }

  public saveUserLog(user: UserLogI) { 
    return this.usersLogC.add(user); 
  }
}
