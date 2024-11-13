import {Container, ProdutoView} from "./style";
import Produtos from "../Produto";

export default function TelaProduto({ produtos }) {

	return (
		<ProdutoView>
			<Container>
				<Produtos produtos={produtos} />
			</Container>
		</ProdutoView>
	)
}