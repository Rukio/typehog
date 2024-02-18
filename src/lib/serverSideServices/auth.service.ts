import {
	BASE_URL,
	PROFILE_API_PATH,
	USERS_API_PATH
} from "../constants";
import {UserProfile} from "../types";

export const getUserProfile = async (): Promise<UserProfile> => {
	const res = await fetch(`${BASE_URL}${USERS_API_PATH}${PROFILE_API_PATH}`);
	return res.json();
};
