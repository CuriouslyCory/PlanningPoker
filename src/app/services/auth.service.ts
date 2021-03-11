import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import firebase from 'firebase/app';
import * as AuthActions from '../state/auth/auth.actions'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private store: Store) { }

  watchAuthStateChange() {
    console.log('Starting to watch auth state');
    this.auth.onAuthStateChanged((user: firebase.User) => { 
      console.log('Service: AuthState Change detected');
      this.store.dispatch(AuthActions.authStateChange({user : user ? {uid: user.uid, name: user.displayName } : null})) 
    })
  }

  login(): Promise<firebase.auth.UserCredential>{
    console.log('Login Triggered');
    return this.auth.signInAnonymously();
  }

  logout(): Promise<void> {
    console.log('Logout Triggered');
    return this.auth.signOut();
  }
}
