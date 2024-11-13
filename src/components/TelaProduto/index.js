import {Container, ProdutoView} from "./style";
import Produtos from "../Produto";
import PlusButton from "../PlusButton";
import NovoProdutoModal from "../NovoProdutoModal";
import NovaVendaModal from "../NovaVendaModal";
import {useEffect, useState} from "react";
import {consultarProdutos, editarProduto, removerProduto, salvarProduto} from "../../service/produtoService";
import Toast from "react-native-toast-message";
import {consultarEventos} from "../../service/eventoService";
import DeleteConfirmModal from "../DeleteConfirmModal";
import {editarVenda} from "../../service/vendaService";
import EditProdutoModal from "../EditProdutoModal";

export default function TelaProduto() {
	const [isNovoProdutoModalVisible, setIsNovoProdutoModalVisible] = useState(false)
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [isEditProdutoModalVisible, setIsEditProdutoModalVisible] = useState(false);
	const [produtoBeingEdit, setProdutoBeingEdit] = useState({});
	const [produtos, setProdutos] = useState([]);
	const [produtoDelete, setProdutoDelete] = useState({})
	
	async function handleCreateProduto(produtoForm) {
		setIsNovoProdutoModalVisible(false)
		salvarProduto(produtoForm)
			.then(() => {
				recarregarProdutos();
				
				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Produto cadastrado com sucesso."
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
	
	async function recarregarProdutos() {
		const produtosRecarregados = await consultarProdutos();
		setProdutos(produtosRecarregados)
	}
	
	function handleConfirmDelete(produto) {
		setProdutoDelete(produto)
		setIsDeleteModalVisible(true);
	}
	
	async function handleDelete() {
		setIsDeleteModalVisible(false);
		
		removerProduto(produtoDelete.id)
			.then(() => {
				recarregarProdutos();
				
				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Produto removido com sucesso."
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
	
	function handleEditeProduto(produto) {
		setProdutoBeingEdit(produto)
		setIsEditProdutoModalVisible(true)
	}
	
	async function handleSaveEditProduto(produto) {
		setIsEditProdutoModalVisible(false);
		
		editarProduto(produtoBeingEdit.id, produto)
			.then(() => {
				recarregarProdutos();
				
				Toast.show({
					type: "success",
					text1: "Sucesso",
					text2: "Produto atualizado com sucesso."
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
		const carregarProdutos = async () => {
			const produtos = await consultarProdutos()
			setProdutos(produtos)
		}
		
		carregarProdutos()
	}, []);

	return (
		<ProdutoView>
			<Container>
				<Produtos produtos={produtos} onEdit={handleEditeProduto} onDelete={handleConfirmDelete}/>
				
				<NovoProdutoModal
					visible={isNovoProdutoModalVisible}
					onClose={() => setIsNovoProdutoModalVisible(false)}
					onSave={handleCreateProduto}
				/>

				<EditProdutoModal
					visible={isEditProdutoModalVisible}
					onSave={handleSaveEditProduto}
					onClose={() => setIsEditProdutoModalVisible(false)}
					produto={produtoBeingEdit}
				/>
				
				<DeleteConfirmModal
					visible={isDeleteModalVisible}
					onClose={() => setIsDeleteModalVisible(false)}
					onConfirm={handleDelete}
				/>
				
				<PlusButton onPress={() => setIsNovoProdutoModalVisible(true)}/>
			</Container>
		</ProdutoView>
	)
}