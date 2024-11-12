import ModalPadrao from "../ModalPadrao";
import {Header} from "./style";
import {Text} from "../Text";
import {Image, TouchableOpacity} from "react-native";
import close from '../../assets/images/close.png'
import VendaForm from "../VendaForm";


export default function NovaVendaModal({ visible, onClose, onSave, eventosOptions }) {
	return (
		<ModalPadrao visible={visible} onClose={onClose}>
			<Header>
				<Text weight={600}>Cadastrar Venda</Text>
				
				<TouchableOpacity onPress={onClose}>
					<Image source={close}></Image>
				</TouchableOpacity>
			</Header>
			
			<VendaForm onSave={onSave} buttonLabel="Cadastrar" eventosOptions={eventosOptions} />
		</ModalPadrao>
	)
}