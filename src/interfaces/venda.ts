import {Produto} from "./produto";

export interface Venda {
	id?: number;
	produtos: Produto[];
	vendedor: string;
	cliente: string;
	data: string;
	eventoId: number;
}