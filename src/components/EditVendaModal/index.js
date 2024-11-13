import ModalPadrao from "../ModalPadrao";
import {Header} from "./style";
import {Text} from "../Text";
import {Image, TouchableOpacity} from "react-native";
import close from '../../assets/images/close.png'
import VendaForm from "../VendaForm";


export default function EditVendaModal({ visible, onClose, onSave, eventosOptions, venda }) {
	return (
		<ModalPadrao visible={visible} onClose={onClose}>
			<Header>
				<Text weight={600}>Editar Venda</Text>
				
				<TouchableOpacity onPress={onClose}>
					<Image source={close}></Image>
				</TouchableOpacity>
			</Header>
			
			<VendaForm onSave={onSave} buttonLabel="Salvar" eventosOptions={eventosOptions} venda={venda}/>
		</ModalPadrao>
	)
}