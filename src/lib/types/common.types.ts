export interface Timestamps {
	created_at: string;
	updated_at: string;
}

export interface SystemId {
	id: number;
}

export interface SystemUuid {
	uuid: string;
}

export interface SystemFields extends Timestamps, SystemId {}

export type ApiMessageResponse<T = { [key: string]: unknown }> = Promise<{ message: string, data?: T }>;