import { FC } from "react";
import styled from "styled-components";
import {getTheme} from "../../../utils/styled";

const LinkFC = styled.span`
	color: ${getTheme(({primary}) => primary.link)};
	cursor: pointer;
	
	&:hover {
		text-decoration: underline;
	}
`;

interface LinkType {
	onClick: () => void;
}

const Link: FC<LinkType> = ({ children, onClick }) => {
	return <LinkFC onClick={onClick}>{children}</LinkFC>;
};

export default Link;
