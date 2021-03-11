import { createAction, props } from '@ngrx/store';
import { Session } from '../../types';

// create a new session
export const addSession = createAction(
  '[Session List] Add Session',
  props<{ session_name: string }>()
);

export const joinSession = createAction(
  '[Session] Join',
  props<{ session: Session }>()
)

export const joinSessionSuccess = createAction(
  '[Session] Join Success',
  props<{ session: Session}>()
);

// triggers API call through effect
export const retrieveSessionList = createAction(
  '[Session List] Retrieve Session'
);

// effect maps api results through this action
export const retireveSessionListSuccess = createAction(
  '[Sessions API] Sessions Loaded Success', 
  props<{ sessions: Session[] }>()
)