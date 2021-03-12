import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { CreateSessionDialogComponent } from '../../dialogs/create-session-dialog/create-session-dialog.component';
import { JoinSessionDialogComponent } from '../../dialogs/join-session-dialog/join-session-dialog.component';

import { planningSessionsSelector} from '../../state/planning-session/planning-session.selectors';
import { retrievePlanningSessionList, addPlanningSession } from '../../state/planning-session/planning-session.actions';

import { PlanningSession } from '../../types'
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';


@Component({
  selector: 'app-create-join',
  templateUrl: './create-join.component.html',
  styleUrls: ['./create-join.component.scss']
})
export class CreateJoinComponent implements OnInit {
  sessions$: Observable<PlanningSession[]> = this.store.select(planningSessionsSelector);

  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(retrievePlanningSessionList());
    //this.sessionService.getSessions()
    //  .subscribe((Session) => this.store.dispatch(retrieveSessionList({ Session })));
  }

  createNew() {
    const dialogRef = this.dialog.open(CreateSessionDialogComponent, {height: '75%', width: '75%'});
    const action = "Close";

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  joinSession() {
    const dialogRef = this.dialog.open(JoinSessionDialogComponent, {
      height: '75%', 
      width: '75%',
      data: { sessions: this.sessions$}
    });
    const action = "Close";

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
