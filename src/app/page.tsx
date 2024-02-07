import { PageRoot } from "../components/ui/PageRoot";
import { Wrapper } from "../components/ui/Wrapper";
import { Block } from "../components/ui/Block";
import { NavigateRaceOptions } from "../components/ui/NavigateRaceOptions";

export default function Home() {
	return (
		<PageRoot>
			<Wrapper>
				<Block display="flex" justifyContent="center">
					<NavigateRaceOptions/>
				</Block>
			</Wrapper>
		</PageRoot>
	);
}
