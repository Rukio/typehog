export interface Timestamps {
	created_at: string;
	updated_at: string;
}

export interface SystemId {
	id: number;
}

export interface SystemFields extends Timestamps, SystemId {}
