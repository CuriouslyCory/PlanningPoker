// main angular library
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';

// environment
import { environment } from '../environments/environment';

// primary modules and components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// angular material components
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateSessionDialogComponent } from './dialogs/create-session-dialog/create-session-dialog.component';
import { JoinSessionDialogComponent } from './dialogs/join-session-dialog/join-session-dialog.component';
import { HomeComponent } from './pages/home/home.component';

// ngrx => store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CreateJoinComponent } from './components/create-join/create-join.component';
import { PlanningSessionComponent } from './pages/planning-session/planning-session.component';
import { planningSessionReducer } from './state/planning-session/planning-session.reducer';
import { PlanningSessionEffects } from './state/planning-session/planning-session.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthComponent } from './components/auth/auth.component';
import { authReducer } from './state/auth/auth.reducer';
import { AuthEffects } from './state/auth/auth.effects';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateJoinComponent,
    PlanningSessionComponent,
    CreateSessionDialogComponent,
    JoinSessionDialogComponent,
    HomeComponent,
    AuthComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    EffectsModule.forRoot([StoreDevtoolsModule, AuthEffects]),
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule, 
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    StoreModule.forRoot({planningSession: planningSessionReducer, auth: authReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
