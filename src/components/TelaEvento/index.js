import {Container, EventoEmptyContainer, EventoEmptyImage, EventoView} from "./style";
import Eventos from "../Evento";
import PlusButton from "../PlusButton";
import {useEffect, useState} from "react";
import NovoEventoModal from "../NovoEventoModal";
import {consultarEventos, editarEvento, removerEvento, salvarEvento} from "../../service/eventoService";
import Toast from "react-native-toast-message";
import {consultarProduto, consultarProdutos, editarProduto, removerProduto} from "../../service/produtoService";
import DeleteConfirmModal from "../DeleteConfirmModal";
import EditEventoModal from "../EditEventoModal";
import evento_empty from "../../assets/images/evento_empty.png";
import {Text} from "../Text";

export default function TelaEvento() {
	const [isNovoEventoModalVisible, setIsNovoEventoModalVisible] = useState(false)
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [isEditEventoModalVisible, setIsEditEventoModalVisible] = useState(false);
	const [eventoBeingEdit, setEventoBeingEdit] = useState({});
	const [eventos, setEventos] = useState([]);
	const [produtos, setProdutos] = useState([]);
	const [eventoDelete, setEventoDelete] = useState({});
	
	async function handleCreateEvento(eventoForm) {
		setIsNovoEventoModalVisible(false)
		
		const produtosCarregados = await carregarProdutosSelecionados(eventoForm.selectedProduto)
		const evento = {
			nome: eventoForm.nome,
			data: eventoForm.data,
			produtos: produtosCarregados
		}
		
		salvarEvento(evento)
			.then(() => {
				recarregarEventos();
				
				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Evento cadastrado com sucesso."
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
	
	async function recarregarEventos() {
		const eventosCarregados = await consultarEventos();
		setEventos(eventosCarregados)
		
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
	
	function handleConfirmDelete(produto) {
		setEventoDelete(produto)
		setIsDeleteModalVisible(true);
	}
	
	async function handleDelete() {
		setIsDeleteModalVisible(false);
		
		removerEvento(eventoDelete.id)
			.then(() => {
				recarregarEventos();
				
				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Evento removido com sucesso."
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
	
	function handleEditeEvento(evento) {
		setEventoBeingEdit(evento)
		setIsEditEventoModalVisible(true)
	}
	
	async function handleSaveEditEvento(eventoForm) {
		setIsEditEventoModalVisible(false);
		
		const produtosCarregados = await carregarProdutosSelecionados(eventoForm.selectedProduto)
		const evento = {
			nome: eventoForm.nome,
			data: eventoForm.data,
			produtos: produtosCarregados
		}
		editarEvento(eventoBeingEdit.id, evento)
			.then(() => {
				recarregarEventos();
				
				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Evento atualizado com sucesso."
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
		const carregarEventos = async () => {
			const eventosCarregador = await consultarEventos()
			setEventos(eventosCarregador)
		}
		
		carregarEventos()
	}, []);
	
	useEffect(() => {
		const carregarProdutos = async () => {
			const produtosCarregados = await consultarProdutos()
			setProdutos(produtosCarregados)
		}
		
		carregarProdutos()
	}, []);
	
	return (
		<EventoView>
			<Container>
				{eventos.length > 0 ? (
					<Eventos eventos={eventos} onEdit={handleEditeEvento} onDelete={handleConfirmDelete} />
				) : (
					<EventoEmptyContainer>
						<EventoEmptyImage source={evento_empty}/>
						<Text color="#fff" weight={600} opacity="0.8" style={{marginTop: 14}}>
							Sem eventos
						</Text>
						<Text color="#fff" opacity="0.5" style={{marginTop: 6}}>
							Não há eventos a serem visualizados
						</Text>
					</EventoEmptyContainer>
				)}
			</Container>
			
			<NovoEventoModal
				visible={isNovoEventoModalVisible}
				onClose={() => setIsNovoEventoModalVisible(false)}
				onSave={handleCreateEvento}
				produtos={produtos}
			/>
			
			<DeleteConfirmModal
				visible={isDeleteModalVisible}
				onClose={() => setIsDeleteModalVisible(false)}
				onConfirm={handleDelete}
			/>

			<EditEventoModal
				visible={isEditEventoModalVisible}
				onClose={() => setIsEditEventoModalVisible(false)}
				onSave={handleSaveEditEvento}
				produtos={produtos}
				evento={eventoBeingEdit}
			/>
			
			<PlusButton onPress={() => setIsNovoEventoModalVisible(true)}/>
		</EventoView>
	)
}