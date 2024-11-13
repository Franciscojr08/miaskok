import ModalPadrao from "../ModalPadrao";
import {Header} from "./style";
import {Text} from "../Text";
import {Image, TouchableOpacity} from "react-native";
import close from '../../assets/images/close.png'
import ProdutoForm from "../ProdutoForm";


export default function NovoProdutoModal({ visible, onClose, onSave}) {
	return (
		<ModalPadrao visible={visible} onClose={onClose}>
			<Header>
				<Text weight={600}>Cadastrar Produto</Text>
				
				<TouchableOpacity onPress={onClose}>
					<Image source={close}></Image>
				</TouchableOpacity>
			</Header>
			
			<ProdutoForm onSave={onSave} buttonLabel="Cadastrar"/>
		</ModalPadrao>
	)
}