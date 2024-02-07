"use client";

import {FC} from "react";
import styled from "styled-components";

interface BlockFCStyledType {
	$display: string;
	$flexDirection: string;
	$justifyContent: string;
	$alignItems: string;
	$margin: string;
	$padding: string;
	$border: string;
}

interface BlockFCType {
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => unknown;
	display?: string;
	flexDirection?: string;
	justifyContent?: string;
	alignItems?: string;
	margin?: string;
	padding?: string;
	border?: string;
}

const BlockFC = styled.div<BlockFCStyledType>`
	display: ${({$display}) => $display};
	flex-direction: ${({$flexDirection}) => $flexDirection};
	justify-content: ${({$justifyContent}) => $justifyContent};
	align-items: ${({$alignItems}) => $alignItems};
	margin: ${({$margin}) => $margin};
  padding: ${({$padding}) => $padding};
	border: ${({$border}) => $border};
`;

const Block: FC<BlockFCType> = ({
	children,
	className,
	onClick,
	display,
	flexDirection,
	justifyContent,
	alignItems,
	margin,
	padding,
	border,
}) =>
	<BlockFC
		className={className || ""}
		onClick={onClick}
		$display={display || ""}
		$flexDirection={flexDirection || ""}
		$justifyContent={justifyContent || ""}
		$alignItems={alignItems || ""}
		$margin={margin || ""}
		$padding={padding || ""}
		$border={border || ""}
	>{children}</BlockFC>;

export default Block;
