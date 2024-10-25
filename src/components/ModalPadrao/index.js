import { Modal } from 'react-native';
import {ModalBody, Overlay} from "./style";

export default function CustomModal({ visible, onClose, children }) {
	return (
		<Modal
			visible={visible}
			transparent
			statusBarTranslucent
			onRequestClose={onClose}
			animationType="fade"
		>
			<Overlay>
				<ModalBody>
					{children}
				</ModalBody>
			</Overlay>
		</Modal>
	);
}