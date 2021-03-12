import { PlanningSession, User } from '../types';

export interface PlanningSessionState {
    currentPlanningSession: PlanningSession;
    planningSessions: PlanningSession[];
}

export interface AppState {
    planningSession: PlanningSessionState,
    user: User
}