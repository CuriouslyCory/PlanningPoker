import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PlanningSession, User } from '../types';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class PlanningSessionService {

  private sessionDoc: AngularFirestoreDocument<PlanningSession>;
  private currentUser: User ;

  constructor( private afs: AngularFirestore) { 
    this.currentUser = {name: 'Bobbyjoe'} as User;
  }

  create(name: string) {
    const newPlanningSession = {
      friendly_name: name,
      created_by: this.currentUser,
      created: new Date(),
      members: [this.currentUser.name]
    } as PlanningSession;

    this.afs.collection<PlanningSession>('planning-session').add(newPlanningSession);
  }

  join(planningSession: PlanningSession): Promise<void> {
    const sessionDoc = this.afs.collection('planning-session/').doc(planningSession.doc_id);
    console.log(planningSession.members);
    return sessionDoc.update({
      members: firebase.firestore.FieldValue.arrayUnion('SueBob')
    });
  }

  getPlanningSessions(): Observable<PlanningSession[]> {
    console.info('Called getSessions');
    return this.afs.collection<PlanningSession>('planning-session').valueChanges();
  }
}
