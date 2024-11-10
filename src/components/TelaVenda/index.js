import {Container, VendaView} from "./style";
import Vendas from "../Venda";

export default function TelaVenda({ vendas }) {
	
	return (
		<VendaView>
			<Container>
				<Vendas vendas={vendas} />
			</Container>
		</VendaView>
	)
}