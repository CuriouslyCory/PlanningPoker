import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';
import * as SessionActions from './session.actions';
 
@Injectable()
export class SessionEffects {
 
  loadSessions$ = createEffect(() => this.actions$.pipe(
    ofType(SessionActions.retrieveSessionList),
    switchMap(() => this.sessionService.getSessions()
      .pipe(
        map(sessions => (SessionActions.retireveSessionListSuccess({sessions}))),
        catchError(() => of({ type: '[Sessions API] Sessions Loaded Error' }))
      ))
    )
  );

  joinSession$ = createEffect(
    () => this.actions$.pipe(
      ofType(SessionActions.joinSession),
      exhaustMap(action => 
        this.sessionService.join(action.session)
          .then(() => SessionActions.joinSessionSuccess({session: action.session}))
      )
    )
  );

  //joinSessionSuccess$ = createEffect()

  // joinSession$ = createEffect(() => this.actions$.pipe(
  //   ofType(SessionActions.joinSession),
  //   switchMap(({session}) => this.sessionService.join(session)
  //     .pipe(
  //       map(() => (SessionActions.joinSessionSuccess({session}))),
  //       catchError(error => of({type: '[Session] Join Failed'}))
  //     )
  //   )
  // ));
 
  constructor(
    private actions$: Actions,
    private sessionService: SessionService
  ) {}
}