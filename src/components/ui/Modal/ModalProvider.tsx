"use client";

import {FC} from "react";
import LoginModal from "./LoginModal";

const ModalProvider: FC = ({ children }) => {
	return <>
		{children}
		<LoginModal/>
	</>;
};

export default ModalProvider;
