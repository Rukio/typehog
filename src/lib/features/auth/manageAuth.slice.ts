import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { User } from "../../types";

export const AUTH_FEATURE_KEY = "auth";

export interface AuthState {
	user?: User;
	authToken?: string;
}

const initialState: AuthState = {};

export const manageAuthSlice = createSlice({
	name: AUTH_FEATURE_KEY,
	initialState,
	reducers: {
		setAuthToken(state, action: PayloadAction<AuthState["authToken"]>) {
			state.authToken = action.payload;
		},
		setUser(state, action: PayloadAction<AuthState["user"]>) {
			state.user = action.payload;
		},
	},
});

export const { setAuthToken, setUser } = manageAuthSlice.actions;
