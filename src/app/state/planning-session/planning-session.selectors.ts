import { createSelector } from "@ngrx/store";
import { PlanningSession } from "../../types";
import { AppState } from "../app.state";


export const selectPlanningSessions = (state: AppState) => state.planningSession.planningSessions;
export const selectCurrentPlanningSession = (state: AppState) => state.planningSession.currentPlanningSession;

export const planningSessionsSelector = createSelector(
    selectPlanningSessions,
    (planningSessions: PlanningSession[]) => planningSessions
);