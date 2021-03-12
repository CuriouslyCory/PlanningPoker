import { Component, Inject, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanningSession } from '../../types';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as SessionActions from '../../state/planning-session/planning-session.actions'

export interface DialogData {
  sessions: Observable<PlanningSession[]>
}

@Component({
  selector: 'app-join-session-dialog',
  templateUrl: './join-session-dialog.component.html',
  styleUrls: ['./join-session-dialog.component.scss']
})
export class JoinSessionDialogComponent implements OnInit {

  sessions: Observable<PlanningSession[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private store: Store) {
    this.sessions = data.sessions;
  }

  ngOnInit(): void {
  }

  join(planningSession: PlanningSession) {
    this.store.dispatch(SessionActions.joinPlanningSession({planningSession}))
  }

}
