import {Container, VendaView} from "./style";
import Vendas from "../Venda";
import PlusButton from "../PlusButton";
import NovaVendaModal from "../NovaVendaModal";
export default function TelaVenda({ vendas }) {
	
	return (
		<VendaView>
			<Container>
				<Vendas vendas={vendas} />
			</Container>
			<PlusButton onPress={() => NovaVendaModal(true)}/>

		</VendaView>
	)
}