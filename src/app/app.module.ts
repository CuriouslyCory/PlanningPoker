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
import { CreateSessionDialogComponent } from './create-session-dialog/create-session-dialog.component';
import { JoinSessionDialogComponent } from './join-session-dialog/join-session-dialog.component';
import { HomeComponent } from './home/home.component';

// ngrx => store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CreateJoinComponent } from './create-join/create-join.component';
import { SessionComponent } from './session/session.component';
import { sessionReducer } from './state/session/session.reducer';
import { SessionEffects } from './state/session/session.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    CreateJoinComponent,
    SessionComponent,
    CreateSessionDialogComponent,
    JoinSessionDialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    EffectsModule.forRoot([SessionEffects]),
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule, 
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    StoreModule.forRoot({session: sessionReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
