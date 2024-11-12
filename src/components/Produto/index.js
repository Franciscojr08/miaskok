import {Text} from "../Text";
import {Produto, ProdutoFooter, ProdutoActions, ProdutoIcon} from "./style";
import {FlatList, TouchableOpacity, View} from "react-native"
import edit from '../../assets/images/edit.png';
import apagar from '../../assets/images/delete.png'

export default function Produtos({ produtos, onEdit, onDelete }) {
	return (
		<FlatList
			data={produtos}
			keyExtractor={produto => produto.id.toString()}
			renderItem={({ item: produto }) => (
				<Produto>
					<View>
						<Text size={18} weight={600}>{produto.nome}</Text>
					</View>
					
					<ProdutoFooter>
                    <Text size={16} >Estoque: <Text weight={500}>{produto.quantidade}</Text></Text>
                    <Text size={16} >R$ <Text weight={500}>{produto.valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Text></Text>
						<ProdutoActions>
							<TouchableOpacity onPress={() => onEdit(produto)}>
								<ProdutoIcon source={edit} />
							</TouchableOpacity>
							
							<TouchableOpacity onPress={() => onDelete(produto)}>
								<ProdutoIcon source={apagar} />
							</TouchableOpacity>
						</ProdutoActions>
					</ProdutoFooter>
				</Produto>
			)}
		/>
	);
}