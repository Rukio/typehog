import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export const MODALS_FEATURE_KEY = "modals";

export interface ModalsState {
	isLoginModalActive: boolean;
	isRegisterModalActive: boolean;
}

const manageModalsInitialState = {
	isLoginModalActive: false,
	isRegisterModalActive: false,
};

export const manageModalsSlice = createSlice({
	name: MODALS_FEATURE_KEY,
	initialState: manageModalsInitialState,
	reducers: {
		setIsLoginModalActive(state, action: PayloadAction<ModalsState["isLoginModalActive"]>) {
			state.isLoginModalActive = action.payload;
		},
		setIsRegisterModalActive(state, action: PayloadAction<ModalsState["isRegisterModalActive"]>) {
			state.isRegisterModalActive = action.payload;
		},
	},
});

export const {
	setIsLoginModalActive,
	setIsRegisterModalActive,
} = manageModalsSlice.actions;

export const selectModalsState = (state: RootState) => state[MODALS_FEATURE_KEY];
export const selectIsLoginModalActiveState = createSelector(
	selectModalsState,
	(modalsState: ModalsState) => modalsState.isLoginModalActive
);
export const selectIsRegisterModalActiveState = createSelector(
	selectModalsState,
	(modalsState: ModalsState) => modalsState.isRegisterModalActive
);
