import {
	Container,
	FiltroView,
	Input,
	VendaEmptyContainer,
	VendaEmptyImage,
	VendaView
} from "./style";
import Vendas from "../Venda";
import {useEffect, useState} from "react";
import {consultarVendas, removerVenda} from "../../service/vendaService";
import venda_empty from "../../assets/images/venda_empty.png";
import {Text} from "../Text";
import Toast from "react-native-toast-message";
import DeleteConfirmModal from "../DeleteConfirmModal";

export default function TelaVenda({ onEdit, onDelete }) {
	const [vendas, setVendas] = useState([])
	const [vendasFiltradas, setVendasFiltradas] = useState([]);
	const [evento, setEvento] = useState("");
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
	const [taskDelete, setTaskDelete] = useState({})
	
	function handleConfirmDelete(task) {
		setTaskDelete(task)
		setIsDeleteModalVisible(true);
	}
	
	function handleDelete() {
		setIsDeleteModalVisible(false);
		
		removerVenda(taskDelete.id)
			.then(() => {
				const atualizacaoVendasFiltradas = vendasFiltradas.filter(venda => venda.id !== taskDelete.id);
				setVendasFiltradas(atualizacaoVendasFiltradas);
				
				const atualizacaoVendas = vendas.filter(venda => venda.id !== taskDelete.id);
				setVendas(atualizacaoVendas);

				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Venda deletada com sucesso."
				});
			})
			.catch((error) => {
				Toast.show({
					type: "error",
					text1: "Erro",
					text2: error.message
				});
			});
		
	}
	
	useEffect(() => {
		const carregarVendas = async () => {
			const vendasCarregadas = await consultarVendas();
			setVendas(vendasCarregadas);
			setVendasFiltradas(vendasCarregadas);
		}
		
		carregarVendas();
	}, []);
	
	useEffect(() => {
		const vendasFiltradas = vendas.filter(venda =>
			venda.nomeEvento.toLowerCase().includes(evento.toLowerCase())
		);
		setVendasFiltradas(vendasFiltradas);
	}, [evento, vendas]);
	
	return (
		<VendaView>
			<Container>
				<FiltroView>
					<Text color="#000" weight={600}>Filtre as vendas por um evento:</Text>
					<Input
						placeholder="Evento"
						placeholderTextColor="#666"
						value={evento}
						onChangeText={setEvento}
					/>
				</FiltroView>
				{vendasFiltradas.length > 0 ? (
					<Vendas onEdit={onEdit} onDelete={handleConfirmDelete} vendas={vendasFiltradas}/>
				) : (
					<VendaEmptyContainer>
						<VendaEmptyImage source={venda_empty}/>
						<Text color="#fff" weight={600} opacity="0.8" style={{marginTop: 14}}>
							Sem vendas
						</Text>
						<Text color="#fff" opacity="0.5" style={{marginTop: 6}}>
							Não há vendas a serem visualizadas
						</Text>
					</VendaEmptyContainer>
				)}
			</Container>
			
			<DeleteConfirmModal
				visible={isDeleteModalVisible}
				onClose={() => setIsDeleteModalVisible(false)}
				onConfirm={handleDelete}
			/>
		</VendaView>
	);
}