import {Produto} from "./produto";

export interface Venda {
	id?: number;
	produtos: Produto[];
	vendedor: string;
	cliente: string;
	telefone_cliente: string;
	data: string;
}