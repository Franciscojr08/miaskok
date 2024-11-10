import {Venda} from "../interfaces/venda";
import {adicionarDado, consultarDados, consultarItem, editarDados, removerDados} from "../storage/LocalStorage";
import {consultarEvento} from "./eventoService";

const KEY_VENDA = "vendas";

export async function salvarVenda(venda: Venda) {
	await adicionarDado(KEY_VENDA, venda);
}

export async function consultarVendas() {
	try {
		const vendas = await consultarDados(KEY_VENDA);
		
		return await Promise.all(vendas.map(async (venda) => {
			let nomeEvento = "Indefinido";
			
			try {
				const evento = await consultarEvento(venda.eventoId);
				nomeEvento = evento?.nome || nomeEvento;
			} catch (eventoError) {
				console.error(`Falha ao consultar evento para venda ${venda.id} - evento ${venda.eventoId}:`, eventoError);
			}
			
			const totalProdutos = venda.produtos.length;
			const valorTotal = venda.produtos.reduce((total, produto) => {
				const preco = parseFloat(produto.valor) || 0;
				return total + preco;
			}, 0);
			
			return {
				...venda,
				produtos: venda.produtos.map(produto => JSON.stringify(produto)),
				nomeEvento,
				totalProdutos,
				valorTotal
			};
		}));
	} catch (error) {
		throw new Error("Falha ao consultar as vendas. Tente novamente!");
	}
}

export function consultarVenda(idVenda) {
	return consultarItem(KEY_VENDA,idVenda)
}

export function editarVenda(idVenda, venda: Venda) {
	return editarDados(KEY_VENDA,idVenda,venda)
}

export function removerVenda(idVenda) {
	return removerDados(KEY_VENDA,idVenda)
}