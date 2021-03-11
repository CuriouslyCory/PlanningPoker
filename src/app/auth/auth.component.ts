import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import * as AuthActions from '../state/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  
  constructor(private store: Store, public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(AuthActions.triggerLogin());
  }

  logout() {
    this.store.dispatch(AuthActions.triggerLogout());
  }

}
