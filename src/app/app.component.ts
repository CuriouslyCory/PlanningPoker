import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PlanningSession } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'planning-poker';
  currentSession = {} as PlanningSession;

  constructor(private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.watchAuthStateChange();
  }

}
