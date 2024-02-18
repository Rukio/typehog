"use client";

import {FC} from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const ModalProvider: FC = ({ children }) => {
	return <>
		{children}
		<LoginModal/>
		<RegisterModal/>
	</>;
};

export default ModalProvider;
