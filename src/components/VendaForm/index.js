import {Form, Input} from "./style";
import {useEffect, useState} from "react";
import Select from "../Select";
import {consultarEvento} from "../../service/eventoService";
import Checkbox from "../Checkbox";
import {Alert} from "react-native";
import ButtonForm from "../ButtonForm";

export default function VendaForm({ onSave, buttonLabel, venda, eventosOptions }) {
	const [selectedEvento, setSelectedEvento] = useState(venda?.eventoId ?? "");
	const [produtosOptions, setProdutosOptions] = useState([]);
	const [selectedProdutos, setSelectedProdutos] = useState(venda?.produtosId ?? []);
	const [vendedor, setVendedor] = useState(venda?.vendedor ?? "");
	const [cliente, setCliente] = useState(venda?.cliente ?? "");
	
	useEffect(() => {
		if (selectedEvento) {
			const carregarProdutosEvento = async () => {
				const evento = await consultarEvento(selectedEvento);
				setProdutosOptions(evento.produtos || []);
			};
			
			carregarProdutosEvento();
		}
	}, [selectedEvento]);
	
	function changeProdutosSelecionados(selectedIds) {
		setSelectedProdutos(selectedIds);
	}
	
	function isFormValid() {
		return (
			selectedEvento &&
			selectedProdutos.length > 0 &&
			vendedor.trim() !== '' &&
			cliente.trim() !== ''
		);
	}
	
	return (
		<Form>
			<Select
				options={eventosOptions}
				placeholder="Selecione um evento"
				selectedValue={selectedEvento}
				onValueChange={setSelectedEvento}
			/>
			
			<Checkbox
				options={produtosOptions}
				selectedValues={selectedProdutos}
				onChange={changeProdutosSelecionados}
			/>
			
			<Input
				placeholder="Vendedor"
				placeholderTextColor="#666"
				value={vendedor}
				onChangeText={setVendedor}
			/>
			
			<Input
				placeholder="Cliente"
				placeholderTextColor="#666"
				value={cliente}
				onChangeText={setCliente}
			/>
			
			<ButtonForm
				onPress={() => {
					if (isFormValid()) {
						onSave({selectedEvento,selectedProdutos,vendedor,cliente})
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