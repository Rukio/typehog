import {SystemFields} from "../types/common.types";

export interface ParagraphDomain extends SystemFields {
	title: string;
	text: string;
	source_id: string;
	lang_id: string;
}
