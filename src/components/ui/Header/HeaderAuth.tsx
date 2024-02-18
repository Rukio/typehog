"use client";

import {FC} from "react";
import styled from "styled-components";
import { Link } from "../Link";
import {getTheme} from "../../../utils/styled";
import {UserProfile} from "../../../lib/types";

const HeaderAuthFC = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

const AuthLinks = styled.div`
	display: flex;
	flex-direction: column;
`;

const HeaderProfile = styled.div`
	border: 1px solid ${getTheme(({layout}) => layout.border)};
	border-radius: 3px;
	padding: 5px;
`;

const HeaderAuth: FC<{
	user: UserProfile;
	onOpenLogin: () => void;
	onOpenRegister: () => void;
}> = ({
	user,
	onOpenLogin,
	onOpenRegister,
}) => {
	return <HeaderAuthFC>
		{
			user ? <HeaderProfile>
				<Link onClick={() => { console.log("ok"); }}>{user.name}</Link>
			</HeaderProfile> :
				<AuthLinks>
					<Link onClick={() => onOpenLogin()}>Login</Link>
					<Link onClick={() => onOpenRegister()}>Register</Link>
				</AuthLinks>
		}
	</HeaderAuthFC>;
};

export default HeaderAuth;
