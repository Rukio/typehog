import {ChangeEvent, FC, FormEvent, useState} from "react";
import { setCookie, deleteCookie } from "cookies-next";
import Modal from "./Modal";
import {useSelector} from "react-redux";
import {useLoginMutation} from "../../../lib/domain";
import {
	selectIsLoginModalActiveState,
	setIsLoginModalActive,
	setToken,
} from "../../../lib/features";
import {useAppDispatch} from "../../../lib/hooks";
import {TOKEN_KEY} from "../../../lib/constants";
import {Input} from "../Form";
import {Block} from "../Block";
import {Button} from "../Button";

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

	const [login] = useLoginMutation();

	const handleClose = () => {
		dispatch(setIsLoginModalActive(false));
	};

	const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const field = e.target.name;

		setForm((form) => ({...form, [field]: value}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const {data, error} = await login({
			email: form.email,
			password: form.password,
		});
		const token = data?.token;

		if (error) {
			deleteCookie(TOKEN_KEY);
		}

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

export default LoginModal;
