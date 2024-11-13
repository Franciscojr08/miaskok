import {Container, ProdutoView} from "./style";
import Produtos from "../Produto";
import PlusButton from "../PlusButton";

export default function TelaProduto({ produtos }) {

	return (
		<ProdutoView>
			<Container>
				<Produtos produtos={produtos} />
				<PlusButton onPress={() => NovoProdutoModal(true)}/>
			</Container>
		</ProdutoView>
	)
}