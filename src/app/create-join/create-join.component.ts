import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { CreateSessionDialogComponent } from '../create-session-dialog/create-session-dialog.component';
import { JoinSessionDialogComponent } from '../join-session-dialog/join-session-dialog.component';

import { sessionsSelector} from '../state/session/session.selectors';
import { retrieveSessionList, addSession } from '../state/session/session.actions';

import { Session } from '../types'
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';


@Component({
  selector: 'app-create-join',
  templateUrl: './create-join.component.html',
  styleUrls: ['./create-join.component.scss']
})
export class CreateJoinComponent implements OnInit {
  sessions$: Observable<Session[]> = this.store.select(sessionsSelector);

  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(retrieveSessionList());
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
