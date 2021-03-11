import { createAction, props } from '@ngrx/store';
import { User } from '../../types';
import firebase from 'firebase/app';

// create a new session
export const triggerLogin = createAction(
  '[Auth] Trigger Login'
);

export const loginSuccess = createAction(
    '[Auth] Login Success'
)

export const triggerLogout = createAction(
  '[Auth] Trigger Logout'
)

export const logoutSuccess = createAction(
  '[Auth] Logout Success'
)

export const authStateChange = createAction(
  '[Auth] State Change',
  props<{user: User | null}>()
)