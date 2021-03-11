import { createSelector } from "@ngrx/store";
import { User } from "../../types";
import { AppState } from "../app.state";


export const selectLoggedInUser = (state: AppState) => state.user;

export const usersSelector = createSelector(
    selectLoggedInUser,
    (user: User) => user
);
 