import {FC, InputHTMLAttributes} from "react";
import styled from "styled-components";
import {getTheme} from "../../../../utils/styled";

const InputFC = styled.input`
	border: 1px solid ${getTheme(({input}) => input.border)};
  background-color: ${getTheme(({input}) => input.bg)};
  border-radius: 3px;
  width: 150px;
  height: 35px;
  padding: 5px;
  margin: 15px 0 15px 0;
  color: ${getTheme(({input}) => input.text)};
  outline: none;

  &:hover {
    border: 1px solid ${getTheme(({input}) => input.hover.border)};
  }
  
  &:focus {
    border: 1px solid ${getTheme(({input}) => input.focus.border)};
  }
`;

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => <InputFC {...props} />;

export default Input;
