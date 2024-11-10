import {Evento} from "../interfaces/evento";
import {adicionarDado, consultarDados, consultarItem, editarDados, removerDados} from "../storage/LocalStorage";

const KEY_EVENTO = "eventos";

export async function salvarEvento(evento: Evento) {
	await adicionarDado(KEY_EVENTO, evento);
}

export async function consultarEventos() {
	try {
		const eventos = await consultarDados(KEY_EVENTO);
		
		return eventos.map(evento => ({
			...evento,
			produtos: evento.produtos.map(produto => JSON.stringify(produto))
		}));
	} catch (error) {
		throw new Error("Falha ao consultar os eventos. Tente novamente!");
	}
}

export function consultarEvento(idEvento) {
	return consultarItem(KEY_EVENTO,idEvento)
}

export function editarEvento(idEvento, produto: Evento) {
	return editarDados(KEY_EVENTO,idEvento,produto)
}

export function removerEvento(idEvento) {
	return removerDados(KEY_EVENTO,idEvento)
}