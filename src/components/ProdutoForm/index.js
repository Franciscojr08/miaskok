import {Form, Input} from "./style";
import Button from "../Button";
import {useState} from "react";


import {Alert} from "react-native";

export default function ProdutoForm({ onSave, buttonLabel, produto }) {

	const [nome, setNome] = useState(produto?.nome ?? '');
	const [quantidade, setQuantidade] = useState(produto?.quantidade ?? '');
	const [valor, setValor] = useState(produto?.valor ?? '');

	function isFormValid() {
		return (
			nome.trim() !== '' &&
			quantidade.trim() !== '' &&
			parseFloat(valor)
		);
	}
	
	return (
		<Form>

			<Input
				placeholder="Nome"
				placeholderTextColor="#666"
				value={nome}
				onChangeText={setNome}
			/>
			
			<Input
				placeholder="Quantidade"
				placeholderTextColor="#666"
				keyboardType="decimal-pad"
				value={quantidade}
				onChangeText={setQuantidade}
			/>
			<Input
				placeholder="Valor"
				placeholderTextColor="#666"
				keyboardType="decimal-pad"
				value={valor}
				onChangeText={setValor}
			/>
			
			<Button
				onPress={() => {
					if (isFormValid()) {
						onSave({nome, quantidade, valor})
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