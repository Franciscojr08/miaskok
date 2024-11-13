import {Container, EventoView} from "./style";
import Eventos from "../Evento";

export default function TelaEvento({ eventos }) {
	
	return (
		<EventoView>
			<Container>
				<Eventos eventos={eventos} />
			</Container>
		</EventoView>
	)
}