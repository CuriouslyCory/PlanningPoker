import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from './auth.actions';
import firebase from 'firebase/app';
 
@Injectable()
export class AuthEffects {
 
  triggerLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.triggerLogin),
      exhaustMap(action => 
        this.authService.login()
          .then(() => {
            console.log('Login triggered');
            return AuthActions.loginSuccess()
          })
      )
    )
  );

  triggerLogout$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.triggerLogout),
      exhaustMap(action => 
        this.authService.logout()
          .then(() => {
            console.log('Successful Logout');
            return AuthActions.logoutSuccess()
          })
      )
    )
  );

 
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}