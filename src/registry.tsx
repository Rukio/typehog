"use client";

import React, {FC, useState} from "react";
import { useServerInsertedHTML } from "next/navigation";
import styled, {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";

const themeDark = {
  primary: {
    text: "#eee",
    bg: "#4b4bc4",
  },
  layout: {
    page: {
      text: "#eee",
      bg: "#111",
    }
  },
  paragraph: {
    correct: {
      text: "#ddd",
      bg: "#0a0",
    },
    error: {
      text: "#ddd",
      bg: "#a00",
    },
    defaultText: "#ddd",
    border: "#2f2fc1",
    bg: "#3737c4",
  },
  input: {
    primary: "#eee",
    bg: "#000",
    border: "#999",
    text: "#999",
    hover: {
      border: "#9696e8",
    },
    focus: {
      border: "#4c4cda",
    },
  },
};

const BodyStyled = styled.body`
  background-color: ${props => props.theme.layout.page.bg};
`;

export default function StyledComponentsRegistry({
 children,
}: {
  children: React.ReactNode
}) {
  const ThemedRoot: FC = ({ children }) => <ThemeProvider theme={themeDark}>
    <html lang="en">
      <BodyStyled>
        {children}
      </BodyStyled>
    </html>
  </ThemeProvider>;

  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <ThemedRoot>{styles}</ThemedRoot>;
  });

  if (typeof window !== "undefined") return <ThemedRoot>{children}</ThemedRoot>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
