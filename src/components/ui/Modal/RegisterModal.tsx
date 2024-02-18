import {ChangeEvent, FC, FormEvent, useState} from "react";
import {setCookie} from "cookies-next";
import Modal from "./Modal";
import {useSelector} from "react-redux";
import {useRegistrationMutation} from "../../../lib/domain";
import {
	selectIsRegisterModalActiveState,
	setIsRegisterModalActive,
	setToken,
} from "../../../lib/features";
import {useAppDispatch} from "../../../lib/hooks";
import {TOKEN_KEY} from "../../../lib/constants";
import {Input} from "../Form";
import {Block} from "../Block";
import {Button} from "../Button";

interface RegisterForm {
	name: string;
	email: string;
	password: string;
}

const RegisterModal: FC = () => {
	const dispatch = useAppDispatch();
	const isActive = useSelector(selectIsRegisterModalActiveState);
	const [form, setForm] = useState<RegisterForm>({
		name: "",
		email: "",
		password: "",
	});

	const [register] = useRegistrationMutation();

	const handleClose = () => {
		dispatch(setIsRegisterModalActive(false));
	};

	const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const field = e.target.name;

		setForm((form) => ({...form, [field]: value}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const {data, error} = await register({
			name: form.name,
			email: form.email,
			password: form.password,
		});
		const token = data?.token;

		if (token) {
			setCookie(TOKEN_KEY, token);
			dispatch(setToken(token));

			handleClose();
		}
	};

	return <Modal
		isActive={isActive}
		setActive={handleClose}
	>
		<form onSubmit={handleSubmit} noValidate>
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
					name="name"
					placeholder="Name"
					type="text"
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
			<Block>
				<Button>Login</Button>
			</Block>
		</form>
	</Modal>;
};

export default RegisterModal;
