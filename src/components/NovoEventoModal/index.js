import ModalPadrao from "../ModalPadrao";
import {Header} from "./style";
import {Text} from "../Text";
import {Image, TouchableOpacity} from "react-native";
import close from '../../assets/images/close.png'
import EventoForm from "../EventoForm";


export default function NovoEventoModal({ visible, onClose, onSave, produtos}) {
	return (
		<ModalPadrao visible={visible} onClose={onClose}>
			<Header>
				<Text weight={600}>Cadastrar Evento</Text>
				
				<TouchableOpacity onPress={onClose}>
					<Image source={close}></Image>
				</TouchableOpacity>
			</Header>
			
			<EventoForm onSave={onSave} buttonLabel="Cadastrar" produtos={produtos}/>
		</ModalPadrao>
	)
}