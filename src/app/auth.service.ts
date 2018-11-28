import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rylToken: String;

  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  constructor(public afAuth: AngularFireAuth ) { 

    
  }

  getAuthorizationToken(){
    if(this.afAuth.auth.currentUser){ 
        // console.log(this.afAuth.auth.currentUser.uid);
        return this.afAuth.auth.currentUser.getIdToken()
    } else {
        return Promise.reject(null);
    }
}

  emailLogin(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      d => {
        return Promise.resolve(d)
      }
    ).catch(
      e => {
        return Promise.reject(e)
      }
    )
  }

  signOut(){
    this.afAuth.auth.signOut()
  }


}
