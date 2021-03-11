import { createReducer, on, Action } from '@ngrx/store';
import firebase from 'firebase/app';

import * as AuthActions from './auth.actions';
import { User } from '../../types';

export interface AuthState {
  user: User
}

export const initialState = {
  user: {} as User,
}

export const authReducer = createReducer<AuthState>(
  initialState,
  on(AuthActions.authStateChange, (state, {user}) => {
    if(user){
      console.log('AuthState Change, user is logged in');
    }else{
      console.log('AuthState Change, user is logged out');
    }
    return {...state, user};
  })
);