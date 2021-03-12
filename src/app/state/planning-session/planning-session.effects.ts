import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { PlanningSessionService } from '../../services/planning-session.service';
import * as PlanningSessionActions from './planning-session.actions';
 
@Injectable()
export class PlanningSessionEffects {
 
  loadPlanningSessions$ = createEffect(() => this.actions$.pipe(
    ofType(PlanningSessionActions.retrievePlanningSessionList),
    switchMap(() => this.planningSessionService.getPlanningSessions()
      .pipe(
        map(planningSessions => (PlanningSessionActions.retirevePlanningSessionListSuccess({planningSessions}))),
        catchError(() => of({ type: '[Planning Sessions API] Sessions Loaded Error' }))
      ))
    )
  );

  joinPlanningSession$ = createEffect(
    () => this.actions$.pipe(
      ofType(PlanningSessionActions.joinPlanningSession),
      exhaustMap(action => 
        this.planningSessionService.join(action.planningSession)
          .then(() => PlanningSessionActions.joinPlanningSessionSuccess({planningSession: action.planningSession}))
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private planningSessionService: PlanningSessionService
  ) {}
}