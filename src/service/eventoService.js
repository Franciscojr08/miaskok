import {Evento} from "../interfaces/evento";
import {
	adicionarDado,
	consultarDados,
	consultarItem,
	editarDados,
	removerDados
} from "../storage/LocalStorage";

const KEY_EVENTO = "eventos";

export async function salvarEvento(produto: Evento) {
	await adicionarDado(KEY_EVENTO, produto);
}

export function consultarEventos() {
	return consultarDados(KEY_EVENTO)
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