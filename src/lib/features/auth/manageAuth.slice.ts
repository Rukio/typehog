import {getCookie} from "cookies-next";
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store";
import {TOKEN_KEY} from "../../constants";

export const AUTH_FEATURE_KEY = "auth";

export interface AuthState {
	token?: string;
}

const initialState: AuthState = {};

const token: string | undefined = getCookie(TOKEN_KEY);

if (token) {
	initialState.token = token;
}

export const manageAuthSlice = createSlice({
	name: AUTH_FEATURE_KEY,
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<AuthState["token"]>) {
			state.token = action.payload;
		},
	},
});

export const { setToken } = manageAuthSlice.actions;

export const selectAuthState = (state: RootState) => state[AUTH_FEATURE_KEY];
export const selectTokenState = createSelector(
	selectAuthState,
	(authState: AuthState) => authState.token
);
