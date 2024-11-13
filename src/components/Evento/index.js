import {Text} from "../Text";
import {Evento, EventoActions, EventoBody, EventoFooter, EventoIcon} from "./style";
import {FlatList, TouchableOpacity, View} from "react-native"
import edit from '../../assets/images/edit.png';
import apagar from '../../assets/images/delete.png'

export default function Eventos({ eventos, onEdit, onDelete }) {
	return (
		<FlatList
			data={eventos}
			keyExtractor={evento => evento.id.toString()}
			renderItem={({ item: evento }) => (
				<Evento>
					<View>
						<Text size={18} weight={600}>{evento.nome}</Text>
					</View>
				
					<EventoFooter>
                   
					<Text weight={500}>{evento.data}</Text>
					<Text weight={500}>{evento.produtos.length} <Text>Produtos</Text></Text>
						<EventoActions>
							<TouchableOpacity onPress={() => onEdit(evento)}>
								<EventoIcon source={edit} />
							</TouchableOpacity>
							
							<TouchableOpacity onPress={() => onDelete(evento)}>
								<EventoIcon source={apagar} />
							</TouchableOpacity>
						</EventoActions>

					</EventoFooter>
				</Evento>
			)}
		/>
	);
}