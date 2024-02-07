import {ChangeEvent, FC} from "react";
import styled from "styled-components";
import {Input} from "../Form/Input";

const TyperInputFC = styled(Input)`
	width: 200px;
`;

interface TyperInputType {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const TyperInput: FC<TyperInputType> = ({ value, onChange }) =>
	<TyperInputFC type="text" placeholder="Type here..." value={value} onChange={onChange} />;

export default TyperInput;
