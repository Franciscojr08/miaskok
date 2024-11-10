import {Produto} from "./produto";

export interface Evento {
	id?: number;
	nome: string;
	data: string;
	produtos: Produto[]
}