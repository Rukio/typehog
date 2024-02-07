import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3001/v1/";
export const API_SLICE_KEY = "api";

export const apiSlice = createApi({
	reducerPath: API_SLICE_KEY,
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: () => ({

	}),
});

export const { middleware } = apiSlice;
