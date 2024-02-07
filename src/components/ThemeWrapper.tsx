"use client";

import {FC} from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledComponentsRegistry from "../registry";
import {Theme} from "../components/ui/themes";
import StoreProvider from "../app/StoreProvider";

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
`;

const ThemeWrapper: FC<{theme: Theme, font: string}> = ({ children, theme, font }) => {
	return (
		<html lang="en" className={font} style={{fontSize: "16px"}}>
			<GlobalStyle/>
			<body style={{backgroundColor: theme.layout.page.bg}}>
				<StoreProvider>
					<StyledComponentsRegistry>
						<ThemeProvider theme={theme}>{children}</ThemeProvider>
					</StyledComponentsRegistry>
				</StoreProvider>
			</body>
		</html>
	);
};

export default ThemeWrapper;
