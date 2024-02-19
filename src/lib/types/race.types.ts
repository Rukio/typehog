import {ApiMessageResponse, SystemId, SystemUuid, Timestamps} from "../types/common.types";
import {ParagraphDomain} from "../types/paragraph.types";

export interface RaceDomain extends SystemId, SystemUuid, Timestamps {
	paragraph_id: SystemId["id"];
	active: boolean;
	queueable: boolean;
	personal: boolean;
	private: boolean;
}

export type RaceFindDomain = ApiMessageResponse<RaceDomain & { paragraph: ParagraphDomain }>;
