import ModalPadrao from "../ModalPadrao";
import {Header} from "./style";
import {Text} from "../Text";
import {Image, TouchableOpacity} from "react-native";
import close from '../../assets/images/close.png'
import ProdutoForm from "../ProdutoForm";


export default function EditProdutoModal({ visible, onClose, onSave, produto}) {
	return (
		<ModalPadrao visible={visible} onClose={onClose}>
			<Header>
				<Text weight={600}>Editar Produto</Text>
				
				<TouchableOpacity onPress={onClose}>
					<Image source={close}></Image>
				</TouchableOpacity>
			</Header>
			
			<ProdutoForm onSave={onSave} buttonLabel="Salvar" produto={produto} />
		</ModalPadrao>
	)
}