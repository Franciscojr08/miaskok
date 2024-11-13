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
import {consultarVendas} from "../../service/vendaService";
import venda_empty from "../../assets/images/venda_empty.png";
import {Text} from "../Text";

export default function TelaVenda() {
	const [vendas, setVendas] = useState([])
	const [vendasFiltradas, setVendasFiltradas] = useState([]);
	const [evento, setEvento] = useState("")
	
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
					<Vendas vendas={vendasFiltradas}/>
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
		</VendaView>
	);
}