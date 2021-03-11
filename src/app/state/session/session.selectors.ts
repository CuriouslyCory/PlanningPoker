import { createSelector } from "@ngrx/store";
import { Session } from "../../types";
import { AppState } from "../app.state";


export const selectSessions = (state: AppState) => state.session.sessions;
export const selectCurrentSesion = (state: AppState) => state.session.currentSession;

export const sessionsSelector = createSelector(
    selectSessions,
    (sessions: Session[]) => sessions
);