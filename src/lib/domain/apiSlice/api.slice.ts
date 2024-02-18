import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../store";
import {BASE_URL} from "../../constants";
import {AUTH_FEATURE_KEY} from "@/lib/features/auth/manageAuth.slice";

export const API_SLICE_KEY = "api";

export const apiSlice = createApi({
	reducerPath: API_SLICE_KEY,
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (
			headers, { getState }
		) => {
			const token = (getState() as RootState)[AUTH_FEATURE_KEY].token;

			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	endpoints: () => ({}),
});

export const { middleware } = apiSlice;
