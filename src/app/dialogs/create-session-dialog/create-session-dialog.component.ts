import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addPlanningSession } from '../../state/planning-session/planning-session.actions';

@Component({
  selector: 'app-create-session-dialog',
  templateUrl: './create-session-dialog.component.html',
  styleUrls: ['./create-session-dialog.component.scss']
})
export class CreateSessionDialogComponent implements OnInit {

  public planningSessionName: string; 

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  create() {
    const planningSessionName = this.planningSessionName;
    this.store.dispatch(addPlanningSession({planningSessionName}));
  }
}
