"use client";

import {FC, useEffect} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {getTheme} from "../../../utils/styled";
import HeaderAuth from "../../ui/Header/HeaderAuth";
import {useAppDispatch} from "../../../lib/hooks";
import { useAppSelector } from "../../../lib/hooks";
import {AUTH_FEATURE_KEY} from "../../../lib/features/auth/manageAuth.slice";
import {
	MODALS_FEATURE_KEY,
	selectIsLoginModalActiveState,
	setIsLoginModalActive,
} from "../../../lib/features/modals/manageModals.slice";
import { useGetParagraphsQuery, selectDomainParagraphs } from "../../../lib/domain/paragraphsSlice/paragraphs.slice";

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
	useGetParagraphsQuery();
	const user = useAppSelector(state => state[AUTH_FEATURE_KEY].user);
	const isLoginActive = useAppSelector(state => state[MODALS_FEATURE_KEY].isLoginModalActive);
	const paragraphs = useSelector(selectDomainParagraphs);
	const isLoginActiveSelector = useSelector(selectIsLoginModalActiveState);
	const dispatch = useAppDispatch();

	return <HeaderFC>
		<HeaderAuth user={user}/>
	</HeaderFC>;
};

export default Header;
