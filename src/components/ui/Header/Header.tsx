"use client";

import {FC, useEffect} from "react";
import styled from "styled-components";
import {getTheme} from "../../../utils/styled";
import HeaderAuth from "../../ui/Header/HeaderAuth";
import {useAppDispatch, useAppSelector} from "../../../lib/hooks";
import {
	setIsLoginModalActive,
	setIsRegisterModalActive,
} from "../../../lib/features/modals/manageModals.slice";
import { useGetParagraphsQuery, selectProfile } from "../../../lib/domain";

const HeaderFC = styled.header`
	display: flex;
	justify-content: space-between;
	min-height: 30px;
	border: 1px solid ${getTheme(({layout}) => layout.border)};
	position: sticky;
	top: 0;
	left: 0;
	background-color: ${getTheme(({layout}) => layout.page.bg)};
	box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.49);
`;

const Header: FC = () => {
	const dispatch = useAppDispatch();

	useGetParagraphsQuery();

	const { data: user } = useAppSelector(selectProfile);

	useEffect(() => console.log(user), [user]);

	const handleOpenLogin = () => {
		dispatch(setIsLoginModalActive(true));
	};
	const handleOpenRegister = () => {
		dispatch(setIsRegisterModalActive(true));
	};

	return <HeaderFC>
		<HeaderAuth
			user={user}
			onOpenLogin={handleOpenLogin}
			onOpenRegister={handleOpenRegister}
		/>
	</HeaderFC>;
};

export default Header;
