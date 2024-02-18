import {SystemId, Timestamps} from "../types/common.types";

export interface RoleDomain extends SystemId, Timestamps {
	name: string,
	can_edit_paragraphs: boolean,
	can_delete_paragraphs: boolean,
	can_edit_scores: boolean,
	can_delete_scores: boolean,
	can_edit_sources: boolean,
	can_delete_sources: boolean,
	can_edit_roles: boolean,
	can_delete_roles: boolean,
	can_edit_users: boolean,
	can_delete_users: boolean,
	can_edit_races: boolean,
	can_delete_races: boolean,
}

export interface LoginPayload {
	email: string;
	password: string;
}

export interface RegistrationPayload {
	email: string;
	name: string;
	password: string;
}
