import {SystemId, Timestamps} from "../types/common.types";
import {RoleDomain} from "../types/auth.types";

export interface UserProfile extends SystemId, Timestamps {
	email: string;
	name: string;
	country: string;
	img: string;
	regdate: string;
	// role: RoleDomain;
}

export interface UserDomain extends SystemId, Timestamps {
	email: string;
	name: string;
	country: string;
	img: string;
	regdate: string;
	role: RoleDomain;
}
