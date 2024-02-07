"use client";

import {FC} from "react";
import styled from "styled-components";

const WrapperFC = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	
	@media (max-width: 1310px) {
		padding: 0 15px;
	}
`;

const Wrapper: FC = ({ children }) => <WrapperFC>{children}</WrapperFC>;

export default Wrapper;
