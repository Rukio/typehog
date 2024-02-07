import {apiSlice} from "../../domain/apiSlice";
import {ParagraphDomain} from "../../types/paragraph.types";

const PARAGRAPHS_API_PATH = "paragraphs";

const paragraphsSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getParagraphs: builder.query<ParagraphDomain[], void>({
			query: () => PARAGRAPHS_API_PATH,
		}),
	}),
});

export const selectDomainParagraphs = paragraphsSlice.endpoints.getParagraphs.select();
export const { useGetParagraphsQuery } = paragraphsSlice;
