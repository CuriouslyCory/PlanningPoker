import { Component, OnInit } from '@angular/core';
import { PlanningSession } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentSession = {} as PlanningSession;

  constructor() { }

  ngOnInit(): void {
  }

}
