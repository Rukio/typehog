import {apiSlice} from "../apiSlice";
import {
	LoginPayload,
	RegistrationPayload,
	UserDomain,
} from "../../types";
import {USERS_API_PATH} from "../../constants";

const LOGIN_API_PATH = "login";
const REGISTRATION_API_PATH = "registration";

const buildAuthLoginPath = () =>
	`${USERS_API_PATH}/${LOGIN_API_PATH}`;

const buildAuthRegistrationPath = () =>
	`${USERS_API_PATH}/${REGISTRATION_API_PATH}`;

const authSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<{token: string}, LoginPayload>({
			query: (payload) => ({
				url: buildAuthLoginPath(),
				method: "POST",
				body: payload,
			}),
		}),
		registration: builder.mutation<UserDomain, RegistrationPayload>({
			query: (payload) => ({
				url: buildAuthRegistrationPath(),
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegistrationMutation,
} = authSlice;
