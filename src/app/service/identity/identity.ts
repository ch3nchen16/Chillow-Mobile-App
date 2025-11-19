import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class Identity {

  private firebaseConfig = {
  apiKey: "AIzaSyAL8C46KlzkyqYQcadmh4ynxlDpu9V6Zpc",
  authDomain: "chillow-904d4.firebaseapp.com",
  projectId: "chillow-904d4",
  storageBucket: "chillow-904d4.firebasestorage.app",
  messagingSenderId: "540416047833",
  appId: "1:540416047833:web:5703267283fb04e409dcc8"
};

// Initialize Firebase
private app = initializeApp(this.firebaseConfig);
private auth = getAuth(this.app);

async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return await signOut(this.auth);
  }

  get currentUser() {
    return this.auth.currentUser;
  }
  
}
