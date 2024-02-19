import {WEBSOCKETS_API_PATH} from "../../constants";
import {apiSlice} from "../../domain";
import {RaceFindDomain} from "../../types/race.types";

const RACE_FIND_PATH = "race/find";

const buildRaceFindPath = () =>
	`${WEBSOCKETS_API_PATH}/${RACE_FIND_PATH}`;

const racesSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		findRace: builder.query<RaceFindDomain, void>({
			query: () => buildRaceFindPath(),
		}),
	}),
});

export const selectRaceFound = racesSlice.endpoints.findRace.select();
export const { useGetFindRaceQuery } = racesSlice;
