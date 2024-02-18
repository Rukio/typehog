import { configureStore } from "@reduxjs/toolkit";
import { manageAuthSlice, AUTH_FEATURE_KEY } from "./features/auth/manageAuth.slice";
import {apiSlice} from "./domain/apiSlice";
import {manageModalsSlice, MODALS_FEATURE_KEY} from "./features/modals/manageModals.slice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			[apiSlice.reducerPath]: apiSlice.reducer,
			[AUTH_FEATURE_KEY]: manageAuthSlice.reducer,
			[MODALS_FEATURE_KEY]: manageModalsSlice.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(apiSlice.middleware).prepend(),
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
