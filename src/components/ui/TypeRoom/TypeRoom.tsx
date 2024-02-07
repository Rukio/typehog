"use client";

import {FC} from "react";
import {Typer} from "../../ui/Typer";
import {Block} from "../../ui/Block";

const text = "Watching John with the machine, it was suddenly so clear. The Terminator would never stop, it would never leave him... it would always be there. And it would never hurt him, never shout at him or get drunk and hit him, or say it couldn\'t spend time with him because it was too busy. And it would die to protect him. Of all the would-be fathers who came and went over the years, this thing, this machine, was the only one who measured up. In an insane world, it was the sanest choice.";

const TypeRoom: FC<{raceId: string}> = ({ raceId }) => {
	console.log(raceId);

	return <Block display="flex" justifyContent="center">
		<Typer text={text} />
	</Block>;
};

export default TypeRoom;
