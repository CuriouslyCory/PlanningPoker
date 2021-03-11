import { Session, User } from '../types';

export interface SessionState {
    currentSession: Session;
    sessions: Session[];
}

export interface AppState {
    session: SessionState,
    user: User
}