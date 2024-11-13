import ModalPadrao from "../ModalPadrao";
import {Header} from "../NovoEventoModal/style";
import {Text} from "../Text";
import {Image, TouchableOpacity} from "react-native";
import close from "../../assets/images/close.png";
import EventoForm from "../EventoForm";


export default function EditEventoModal({ visible, onClose, onSave, produtos, evento}) {
	return (
		<ModalPadrao visible={visible} onClose={onClose}>
			<Header>
				<Text weight={600}>Editar Evento</Text>
				
				<TouchableOpacity onPress={onClose}>
					<Image source={close}></Image>
				</TouchableOpacity>
			</Header>
			
			<EventoForm onSave={onSave} buttonLabel="Salvar" produtos={produtos} evento={evento}/>
		</ModalPadrao>
	)
}