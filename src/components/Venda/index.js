import {Text} from "../Text";
import {Venda, VendaBody, VendaFooter} from "./style";
import {FlatList, TouchableOpacity, View} from "react-native"
import {VendaActions, VendaIcon} from "./style";
import edit from '../../assets/images/edit.png';
import apagar from '../../assets/images/delete.png'

export default function Vendas({ vendas, onEdit, onDelete }) {
	return (
		<FlatList
			data={vendas}
			keyExtractor={venda => venda.id.toString()}
			renderItem={({ item: venda }) => (
				<Venda>
					<View>
						<Text size={18} weight={600}>{venda.nomeEvento} - {new Date(venda.data).toLocaleDateString('pt-BR')}</Text>
					</View>
					
					<VendaBody>
						<Text size={18} weight={500}>Vendedor: <Text>{venda.vendedor}</Text></Text>
						<Text size={18} weight={500}>Cliente: <Text>{venda.cliente}</Text></Text>
					</VendaBody>
					
					<VendaFooter>
						<Text weight={500}>
							{venda.totalProdutos} produtos - R$ {venda.valorTotal.toLocaleString('pt-BR', {
							style: 'decimal',
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}
						</Text>
						
						<VendaActions>
							<TouchableOpacity onPress={() => onEdit(venda)}>
								<VendaIcon source={edit} />
							</TouchableOpacity>
							
							<TouchableOpacity onPress={() => onDelete(venda)}>
								<VendaIcon source={apagar} />
							</TouchableOpacity>
						</VendaActions>
					</VendaFooter>
				</Venda>
			)}
		/>
	);
}