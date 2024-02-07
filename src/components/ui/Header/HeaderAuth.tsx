"use client";

import {FC} from "react";
import styled from "styled-components";
import { Link } from "../Link";
import {getTheme} from "../../../utils/styled";
import {User} from "../../../lib/types";

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

const HeaderAuth: FC<{ user: User }> = ({
	user,
}) => {
	console.log(user);
	return <HeaderAuthFC>
		<AuthLinks>
			<Link onClick={() => { console.log("ok"); }}>Login</Link>
			<Link onClick={() => { console.log("ok"); }}>Register</Link>
		</AuthLinks>
		<HeaderProfile>
			<Link onClick={() => { console.log("ok"); }}>Rukio</Link>
		</HeaderProfile>
	</HeaderAuthFC>;
};

export default HeaderAuth;
