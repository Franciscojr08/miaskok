import {Produto} from "../interfaces/venda";
import {
	adicionarDado,
	consultarDados,
	consultarItem,
	editarDados,
	removerDados
} from "../storage/LocalStorage";

const KEY_PRODUTO = "produtos";

export async function salvarProduto(produto: Produto) {

	await adicionarDado(KEY_PRODUTO, produto);
}

export function consultarProdutos() {
	return consultarDados(KEY_PRODUTO)
}

export function consultarProduto(idProduto) {
	return consultarItem(KEY_PRODUTO,idProduto)
}

export function editarProduto(idProduto, produto: Produto) {
	return editarDados(KEY_PRODUTO,idProduto,produto)
}

export function removerProduto(idProduto) {
	return removerDados(KEY_PRODUTO,idProduto)
}