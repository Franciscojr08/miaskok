import {Venda} from "../interfaces/venda";
import {adicionarDado, consultarDados, consultarItem, editarDados, removerDados} from "../storage/LocalStorage";
import {consultarEvento, consultarEventos} from "./eventoService";
import {consultarProdutos} from "./produtoService";

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
				produtosId: venda.produtos.reduce((ids, produto) => {
					const id_produto = produto.id;
					ids.push(id_produto)
					return ids;
				},[]),
				nomeEvento,
				totalProdutos,
				valorTotal
			};
		}));
	} catch (error) {
		throw new Error("Falha ao consultar as vendas. Tente novamente!");
	}
}

// Função p/ calcular a média de vendas por evento *Lennon
export const calcularMediaVendasPorEvento = async () => {
	try {
		const eventos = await consultarEventos();
		
		if (eventos.length === 0) return 0;
		
		const totalVendas = await calcularValorTotalDasVenda();
		const mediaVendasPorEvento = totalVendas / eventos.length;
		
		return parseFloat(mediaVendasPorEvento); // vai retorna um número formatado *Lennon
	} catch (error) {
		throw new Error("Erro ao calcular a média de vendas por evento.");
	}
};

export async function calcularValorTotalDasVenda() {
	const vendas = await consultarVendas()
	
	return vendas.reduce((total, venda) => {
		const valorVenda = venda.valorTotal
		return total + valorVenda
	}, 0);
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