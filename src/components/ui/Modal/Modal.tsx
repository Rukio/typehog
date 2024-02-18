import {FC} from "react";
import {Block} from "../../ui/Block";
import styled from "styled-components";
import {getTheme} from "../../../utils/styled";

const Overlay = styled(Block)<{ $isActive: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${getTheme(({modal}) => modal.layoutBg)};
	opacity: ${(props) => props.$isActive ? "1" : "0"};
	pointer-events: ${(props) => props.$isActive ? "all" : "none"};
	transition: opacity 0.5s;
`;

const ModalBody = styled(Block)`
	border: 1px solid ${getTheme(({layout}) => layout.border)};
	border-radius: 5px;
	background-color: ${getTheme(({modal}) => modal.bg)};
	min-width: 400px;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Modal: FC<{
	isActive: boolean;
	setActive: (isActive?: boolean) => void
}> = ({isActive, setActive, children}) => {
	return <Overlay
		$isActive={isActive}
		justifyContent="center"
		alignItems="center"
		display="flex"
		onClick={() => setActive(false)}
	>
		<ModalBody padding="15px 20px" onClick={(e) => e.stopPropagation()}>
			{children}
		</ModalBody>
	</Overlay>;
};

export default Modal;
