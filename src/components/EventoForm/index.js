import {Form, Input, ProdutosContainer} from "./style";
import {useEffect, useState} from "react";
import {Platform, StyleSheet} from "react-native";
import CheckBox from "../Checkbox";
import {Alert} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { consultarEvento } from "../../service/eventoService";
import ButtonForm from "../ButtonForm";

export default function EventoForm({ onSave, buttonLabel, evento, produtos}) {

	const [nome, setNome] = useState(evento?.nome ?? '');
	const [data, setData] = useState(evento?.data ?? '');
	// const [produtos, setProdutos] = useState();

	const [selectedProduto, setSelectedProduto] = useState(evento?.produtosId ?? []);

	
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
			
			<CheckBox
				options={produtos}
				selectedValues={selectedProduto}
				onChange={changeProdutosSelecionados}
			/>

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

			
			<ButtonForm
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
			</ButtonForm>
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