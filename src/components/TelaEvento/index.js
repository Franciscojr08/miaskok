import {Container, EventoView} from "./style";
import Eventos from "../Evento";
import PlusButton from "../PlusButton";

export default function TelaEvento({ eventos }) {
	
	return (
		<EventoView>
			<Container>
				<Eventos eventos={eventos} />
			</Container>
			<PlusButton onPress={() => NovaEventoModal(true)}/>
		</EventoView>
	)
}