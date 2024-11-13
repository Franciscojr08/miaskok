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
import {consultarVendas, editarVenda, removerVenda, salvarVenda} from "../../service/vendaService";
import venda_empty from "../../assets/images/venda_empty.png";
import {Text} from "../Text";
import Toast from "react-native-toast-message";
import DeleteConfirmModal from "../DeleteConfirmModal";
import EditVendaModal from "../EditVendaModal";
import {consultarEventos} from "../../service/eventoService";
import {consultarProduto} from "../../service/produtoService";
import PlusButton from "../PlusButton";
import NovaVendaModal from "../NovaVendaModal";

export default function TelaVenda() {
	const [vendas, setVendas] = useState([]);
	const [vendasFiltradas, setVendasFiltradas] = useState([]);
	const [evento, setEvento] = useState("");
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [vendaDelete, setVendaDelete] = useState({});
	const [isEditVendaModalVisible, setIsEditVendaModalVisible] = useState(false);
	const [vendaBeingEdit, setVendaBeingEdit] = useState({});
	const [eventosOptions, setEventosOptions] = useState([]);
	const [isNewVendaModalVisible, setIsNewVendaModalVisible] = useState(false)
	
	function handleConfirmDelete(venda) {
		setVendaDelete(venda)
		setIsDeleteModalVisible(true);
	}
	
	async function handleCreateVenda(vendaForm) {
		setIsNewVendaModalVisible(false);
		
		const produtosCarregados = await carregarProdutosSelecionados(vendaForm.selectedProdutos)
		const venda = {
			produtos: produtosCarregados,
			vendedor: vendaForm.vendedor,
			cliente: vendaForm.cliente,
			data: new Date().toISOString(),
			eventoId: vendaForm.selectedEvento
		}
		
		salvarVenda(venda)
			.then(() => {
				recarregarVendas();

				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Venda cadastrada com sucesso."
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
	
	async function handleDelete() {
		setIsDeleteModalVisible(false);
		
		removerVenda(vendaDelete.id)
			.then(() => {
				recarregarVendas();
				
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
	
	function handleEditeTask(task) {
		setVendaBeingEdit(task)
		setIsEditVendaModalVisible(true)
	}
	
	async function handleSaveEditVenda(task) {
		setIsEditVendaModalVisible(false);
		const produtosCarregados = await carregarProdutosSelecionados(task.selectedProdutos)
		const vendaEdit = {
			produtos: produtosCarregados,
			vendedor: task.vendedor,
			cliente: task.cliente,
			data: vendaBeingEdit.data,
			eventoId: task.selectedEvento
		}
		
		editarVenda(vendaBeingEdit.id, vendaEdit)
			.then(() => {
				recarregarVendas();
				
				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Venda atualizada com sucesso."
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
	
	async function recarregarVendas() {
		const vendasCarregadas = await consultarVendas(); // Sua função para obter as vendas
		setVendas(vendasCarregadas);
		setVendasFiltradas(vendasCarregadas);
	}
	
	async function carregarProdutosSelecionados(selectedProdutos) {
		const produtosCarregados = [];
		
		await Promise.all(
			selectedProdutos.map(async (id) => {
				const produto = await consultarProduto(id);
				produtosCarregados.push(produto);
			})
		);
		
		return produtosCarregados;
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
	
	useEffect(() => {
		const carregarEventos = async () => {
			const eventos = await consultarEventos()
			setEventosOptions(eventos)
		}
		
		carregarEventos()
	}, []);
	
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
					<Vendas onEdit={handleEditeTask} onDelete={handleConfirmDelete} vendas={vendasFiltradas}/>
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
			
			<EditVendaModal
				visible={isEditVendaModalVisible}
				onClose={() => setIsEditVendaModalVisible(false)}
				eventosOptions={eventosOptions}
				onSave={handleSaveEditVenda}
				venda={vendaBeingEdit}
			/>
			
			<DeleteConfirmModal
				visible={isDeleteModalVisible}
				onClose={() => setIsDeleteModalVisible(false)}
				onConfirm={handleDelete}
			/>
			
			<NovaVendaModal
				visible={isNewVendaModalVisible}
				onClose={() => setIsNewVendaModalVisible(false)}
				onSave={handleCreateVenda}
				eventosOptions={eventosOptions}
			/>
			
			<PlusButton onPress={() => setIsNewVendaModalVisible(true)}/>
		</VendaView>
	);
}