import {FetchInitConfig} from "../types/api.types";
import {BASE_URL} from "../constants";

export const fetchApi = async (url: string, options?: FetchInitConfig) => {
	const res = await fetch(`${BASE_URL}${url}`, {
		...options,
	});
	return res.json();
};
