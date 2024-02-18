"use client";

import {FC} from "react";
import {Button} from "../Button";
import {useRouter} from "next/navigation";

const NavigateRaceOptions: FC = () => {
	const router = useRouter();

	return <div>
		<Button onClick={() => {router.push("/laskdjfl");}}>Join race</Button>
	</div>;
};

export default NavigateRaceOptions;
