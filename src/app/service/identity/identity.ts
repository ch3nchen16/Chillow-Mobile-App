import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Identity {

//Initialize Firebase
private app = initializeApp(environment.firebaseConfig);
private auth = getAuth(this.app);

//login
async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
//register
  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }
// this is for the prepopulated email address
  getCurrentUser() {
    return this.auth.currentUser;
  }
}
