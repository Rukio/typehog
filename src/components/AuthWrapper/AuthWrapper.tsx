"use client";

import {FC, useMemo} from "react";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../lib/hooks";
import {selectProfile, useLazyGetProfileQuery} from "../../lib/domain";
import {selectTokenState} from "../../lib/features";

const AuthWrapper: FC = ({ children }) => {
	const {
		isLoading,
	} = useAppSelector(selectProfile);
	const token = useSelector(selectTokenState);

	const [trigger] = useLazyGetProfileQuery();

	useMemo(() => {
		trigger();
	}, [token]);

	if (isLoading) {
		return <p>LOADING</p>;
	}
	return <>{children}</>;
};

export default AuthWrapper;
