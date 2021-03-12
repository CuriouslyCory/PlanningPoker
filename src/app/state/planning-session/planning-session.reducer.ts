import { createReducer, on, Action } from '@ngrx/store';

import { joinPlanningSessionSuccess, retirevePlanningSessionListSuccess } from './planning-session.actions';
import { PlanningSession } from '../../types/planning-session';

export const initialState = {
  sessions: [] as PlanningSession[],
  currentSession: {} as PlanningSession
}

export const planningSessionReducer = createReducer(
  initialState,
  on(retirevePlanningSessionListSuccess, (state, { planningSessions }) => ({...state, sessions: planningSessions})),
  on(joinPlanningSessionSuccess, (state, { planningSession }) => ({...state, currentPlanningSession: planningSession}))
);