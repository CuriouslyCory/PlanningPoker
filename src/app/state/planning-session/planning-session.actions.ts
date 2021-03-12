import { createAction, props } from '@ngrx/store';
import { PlanningSession } from '../../types';

// create a new session
export const addPlanningSession = createAction(
  '[Planning Session List] Add Session',
  props<{ planningSessionName: string }>()
);

export const joinPlanningSession = createAction(
  '[Planning Session] Join Planning Session',
  props<{ planningSession: PlanningSession }>()
)

export const joinPlanningSessionSuccess = createAction(
  '[Planning Session] Join Planning Session Success',
  props<{ planningSession: PlanningSession}>()
);

// triggers API call through effect
export const retrievePlanningSessionList = createAction(
  '[Planning Session List] Retrieve Planning Session'
);

// effect maps api results through this action
export const retirevePlanningSessionListSuccess = createAction(
  '[Planning Sessions API] Planning Sessions Loaded Success', 
  props<{ planningSessions: PlanningSession[] }>()
)
