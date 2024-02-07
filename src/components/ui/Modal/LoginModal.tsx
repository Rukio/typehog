import {ChangeEvent, FC, useEffect, useState} from "react";
import Modal from "./Modal";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../lib/hooks";
import {selectIsLoginModalActiveState, setIsLoginModalActive} from "../../../lib/features/modals/manageModals.slice";
import { Input } from "../Form";
import {Block} from "../Block";

interface LoginForm {
	email: string;
	password: string;
}

const LoginModal: FC = () => {
	const dispatch = useAppDispatch();
	const isActive = useSelector(selectIsLoginModalActiveState);
	const [form, setForm] = useState<LoginForm>({
		email: "",
		password: "",
	});

	const handleClose = (value: boolean) => {
		console.log(value);
		dispatch(setIsLoginModalActive(value));
	};

	const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const field = e.target.name;

		setForm((form) => ({...form, [field]: value}));
	};

	return <Modal
		isActive={isActive}
		setActive={handleClose}
	>
		<Block>
			<Input
				name="email"
				placeholder="Email"
				type="email"
				onChange={onFormChange}
			/>
		</Block>
		<Block>
			<Input
				name="password"
				placeholder="Password"
				type="password"
				onChange={onFormChange}
			/>
		</Block>
	</Modal>;
};

export default LoginModal;
