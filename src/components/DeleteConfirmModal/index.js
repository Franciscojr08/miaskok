import {Text} from "../Text";
import {Actions} from "./style";
import ModalPadrao from "../ModalPadrao";
import ButtonForm from "../ButtonForm";


export default function DeleteConfirmModal({ visible, onClose, onConfirm }) {
	return (
		<ModalPadrao onClose={onClose} visible={visible}>
			<Text size={18} weight="600">
				Tem certeza que deseja excluir?
			</Text>
			
			<Text opacity={0.5} style={{ marginTop: 4 }}>
				Essa ação não pode ser desfeita
			</Text>
			
			<Actions>
				<ButtonForm onPress={onClose} primary={false}>Cancelar</ButtonForm>
				<ButtonForm onPress={onConfirm}>Confirmar</ButtonForm>
			</Actions>
		</ModalPadrao>
	);
}