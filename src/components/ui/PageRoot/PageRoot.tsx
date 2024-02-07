"use client";

import { FC } from "react";
import styled from "styled-components";

const PageRootFC = styled.div`
	padding: 30px 0;
`;

const PageRoot: FC = ({ children }) => <PageRootFC>{children}</PageRootFC>;

export default PageRoot;
