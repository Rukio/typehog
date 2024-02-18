import styled from "styled-components";
import {getTheme} from "@/utils/styled";
import {ButtonHTMLAttributes, FC} from "react";

const ButtonFC = styled.button`
	background-color: ${getTheme(({primary}) => primary.bg)};
	border: 1px solid ${getTheme(({primary}) => primary.border)};
	border-radius: 3px;
	padding: 5px 10px;
	color: ${getTheme(({primary}) => primary.text)};
	cursor: pointer;
	transition: background-color 0.3s;
	
	&:hover {
		background-color: ${getTheme(({primary}) => primary.hover)};
	}

  &:focus {
    background-color: ${getTheme(({primary}) => primary.focus)};
  }
`;

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({...props}) =>
	<ButtonFC {...props} />;

export default Button;
