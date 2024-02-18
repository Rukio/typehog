import {USERS_API_PATH} from "../../constants";
import {apiSlice} from "../../domain";
import {UserDomain} from "../../types";

const USER_PROFILE_PATH = "profile";

const buildUserProfilePath = () =>
	`${USERS_API_PATH}/${USER_PROFILE_PATH}`;

const usersSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProfile: builder.query<UserDomain, void>({
			query: () => buildUserProfilePath(),
		}),
	}),
});

export const selectProfile = usersSlice.endpoints.getProfile.select();
export const { useLazyGetProfileQuery } = usersSlice;
