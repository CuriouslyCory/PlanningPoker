import { createReducer, on, Action } from '@ngrx/store';

import { joinSessionSuccess, retireveSessionListSuccess } from './session.actions';
import { Session } from '../../types/session';

export const initialState = {
  sessions: [] as Session[],
  currentSession: {} as Session
}

export const sessionReducer = createReducer(
  initialState,
  on(retireveSessionListSuccess, (state, { sessions }) => ({...state, sessions: sessions})),
  on(joinSessionSuccess, (state, { session }) => ({...state, currentSession: session}))
);