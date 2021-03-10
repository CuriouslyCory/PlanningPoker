import { Component } from '@angular/core';
import { Session } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planning-poker';
  currentSession = {} as Session;

  constructor() {}

}
