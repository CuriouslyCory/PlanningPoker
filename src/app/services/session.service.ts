import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Session, User } from '../types';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionDoc: AngularFirestoreDocument<Session>;
  private currentUser: User ;

  constructor( private afs: AngularFirestore) { 
    this.currentUser = {name: 'Bobbyjoe'} as User;
  }

  create(name: string) {
    const newSession = {
      friendly_name: name,
      created_by: this.currentUser,
      created: new Date(),
      members: [this.currentUser.name]
    } as Session;

    this.afs.collection<Session>('planning-session').add(newSession);
  }

  join(session: Session): Promise<void> {
    const sessionDoc = this.afs.collection('planning-session/').doc(session.doc_id);
    console.log(session.members);
    return sessionDoc.update({
      members: firebase.firestore.FieldValue.arrayUnion('SueBob')
    });
  }

  getSessions(): Observable<Session[]> {
    console.info('Called getSessions');
    return this.afs.collection<Session>('planning-session').valueChanges();
  }
}
