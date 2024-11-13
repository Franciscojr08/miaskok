import {Form, Input, ProdutosContainer} from "./style";
import Button from "../Button";
import {useEffect, useState} from "react";
import { StyleSheet } from "react-native";
import CheckBox from "../Checkbox";
import {Alert} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { consultarProdutos } from "../../service/produtoService";
import { consultarEvento } from "../../service/eventoService";

export default function EventoForm({ onSave, buttonLabel, evento, produtos}) {

	const [nome, setNome] = useState(evento?.nome ?? '');
	const [data, setData] = useState(evento?.data ?? '');
	// const [produtos, setProdutos] = useState();

	const [produtosOptions, setProdutosOptions] = useState([]);
	const [selectedProduto, setSelectedProduto] = useState([]);

	useEffect(() => {
		if (evento) {
			const carregarProdutosEvento= async () => {
				const produtos = await consultarEvento(evento.produto);
				setSelectedProduto(produtos || []);
			};
			
			carregarProdutosEvento();
		}
	}, [selectedProduto]);
	
	function changeProdutosSelecionados(selectedIds) {
		setSelectedProduto(selectedIds);
	}

	function isFormValid() {
		return (
			nome.trim() !== '' &&
			data.trim() !== '' &&
			produtos.length > 1
		);
	}


	return (
		<Form>

			<ProdutosContainer >
				<CheckBox
				options={produtos}
				selectedValues={selectedProduto}
				onChange={changeProdutosSelecionados}
				/>
			</ProdutosContainer>
			

			<Input
				placeholder="Nome do Evento"
				placeholderTextColor="#666"
				value={nome}
				onChangeText={setNome}
			/>
			
			<TextInputMask
				type="datetime"
				placeholder="Data"
				placeholderTextColor="#666"
				maxLength={10}
				value={data}
				onChangeText={setData}
				style={style.input}
			/>

			
			<Button
				onPress={() => {
					if (isFormValid()) {
						onSave({nome, data, selectedProduto})
					} else  {
						Alert.alert(
							"Atenção",
							"Preencha os campos obrigatórios",
							[
								{
									text: "OK"
								}
							]
						)
					}
				}}
				disable={!isFormValid()}
			>
				{buttonLabel}
			</Button>
		</Form>
	)
	
}
const style = StyleSheet.create({
	input:{
		padding: 16,
		borderColor: 'rgba(204,204,204,0.5)',
		borderWidth:1,
		borderRadius: 8,
	}
	
})