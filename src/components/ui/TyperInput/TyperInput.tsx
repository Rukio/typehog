import {ChangeEvent, FC} from "react";
import styled from "styled-components";

const TyperInputFC = styled.input`
  border: 1px solid ${({theme}) => theme.input.border};
  background-color: ${({theme}) => theme.input.bg};
  border-radius: 3px;
  width: 150px;
  height: 35px;
  padding: 5px;
  margin: 15px 0 15px 0;
  color: ${({theme}) => theme.input.text};
  outline: none;

  &:hover {
    border: 1px solid ${({theme}) => theme.input.hover.border};
  }
  
  &:focus {
    border: 1px solid ${({theme}) => theme.input.focus.border};
  }
`;

interface TyperInputType {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const TyperInput: FC<TyperInputType> = ({ value, onChange }) =>
  <TyperInputFC type="text" value={value} onChange={onChange} />;

export default TyperInput;