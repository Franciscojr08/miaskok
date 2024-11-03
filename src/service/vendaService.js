import { Venda } from "../interfaces/venda";
import {
	adicionarDado,
	consultarDados,
	consultarItem,
	editarDados,
	removerDados
} from "../storage/LocalStorage";

const KEY_VENDA = "vendas";

export async function salvarVenda(produto: Venda) {
	await adicionarDado(KEY_VENDA, produto);
}

export function consultarVendas() {
	return consultarDados(KEY_VENDA)
}

export function consultarVenda(idVenda) {
	return consultarItem(KEY_VENDA,idVenda)
}

export function editarVenda(idVenda, produto: Venda) {
	return editarDados(KEY_VENDA,idVenda,produto)
}

export function removerVenda(idVenda) {
	return removerDados(KEY_VENDA,idVenda)
}