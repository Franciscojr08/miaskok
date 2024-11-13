import {TouchableOpacity, View} from "react-native";
import {Text} from '../Text'
import ModalPadrao from "../ModalPadrao";


export default function ModalEstatistica({visible, onClose, mediaVendas, totalEventos, valorTotalVendas}) {
	return (
		<ModalPadrao
			visible={visible}
			transparent={true}
			animationType="slide"
			onRequestClose={onClose}
		>
			<View>
				<Text size="18" weight={600} style={{marginBottom: 5}}>Valor total de vendas</Text>
				<Text size="16"  style={{marginBottom: 15}}>
					{valorTotalVendas !== null ? valorTotalVendas.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					}) : "Carregando..."}
				</Text>
			</View>
			
			<View>
				<Text size="18" weight={600} style={{marginBottom: 5}}>Média de Vendas por Evento</Text>
				{/* Alteração da moeda "currency" para Real, deixando mais intuitiva a visualização @Lennon */}
				
				<Text size="16"  style={{marginBottom: 15}}>
					{mediaVendas !== null ? mediaVendas.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					}) : "Carregando..."}
				</Text>
			</View>
			
			<View>
				<Text size="18" weight={600} style={{marginBottom: 5}}>Quantidade de eventos cadastrados</Text>
				<Text size="16"  style={{marginBottom: 15}}>{totalEventos}</Text>
			</View>
			
			<TouchableOpacity onPress={onClose}>
				<Text size="16" color="#550AB1" style={{textAlign: "center"}}>
					Fechar
				</Text>
			</TouchableOpacity>
		</ModalPadrao>
	)
}