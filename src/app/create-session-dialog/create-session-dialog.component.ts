import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSession } from '../state/session/session.actions';

@Component({
  selector: 'app-create-session-dialog',
  templateUrl: './create-session-dialog.component.html',
  styleUrls: ['./create-session-dialog.component.scss']
})
export class CreateSessionDialogComponent implements OnInit {

  public session_name: string; 

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  create() {
    const session_name = this.session_name;
    this.store.dispatch(addSession({session_name}));
  }
}
