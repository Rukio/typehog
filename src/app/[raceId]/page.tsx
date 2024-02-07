import {Wrapper} from "../../components/ui/Wrapper";
import {PageRoot} from "../../components/ui/PageRoot";
import {TypeRoom} from "../../components/ui/TypeRoom";

export default function RacePage({ params }: { params: { raceId: string }}) {
	return <PageRoot>
		<Wrapper>
			<TypeRoom raceId={params.raceId}/>
		</Wrapper>
	</PageRoot>;
}
