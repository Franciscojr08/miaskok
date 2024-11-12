import AsyncStorage from '@react-native-async-storage/async-storage';

const salvarDados = async (key, data) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		throw new Error("Falha ao salvar os dados. Tente novamente!");
	}
};

export const consultarDados = async (key) => {
	try {
		const dados = await AsyncStorage.getItem(key);
		return dados != null ? JSON.parse(dados) : [];
	} catch (error) {
		throw new Error("Falha ao consultar os dados. Tente novamente!");
	}
};

// Função p/ calcular a média de vendas por evento *Lennon
export const calcularMediaVendasPorEvento = async () => {
	try {
		const vendas = await consultarDados('vendas'); 
		const eventos = await consultarDados('eventos'); 

		if (eventos.length === 0) return 0; 

		
		const totalVendas = vendas.length;
		const mediaVendasPorEvento = totalVendas / eventos.length;

		return mediaVendasPorEvento.toFixed(2); // vai retorna um número formatado *Lennon
	} catch (error) {
		throw new Error("Erro ao calcular a média de vendas por evento.");
	}
};

export const consultarItem = async (key, id) => {
	const data = await consultarDados(key);
	const index = data.findIndex((item) => Number(item.id) === Number(id));
	
	if (index !== -1) {
		return data[index];
	} else {
		throw new Error("Item não encontrado.");
	}
}

export const adicionarDado = async (key, item) => {
	let currentId = 0;
	
	try {
		let data = await consultarDados(key);

		if (!Array.isArray(data)) {
			data = [];
		}
		
		if (data.length > 0) {
			currentId = Math.max(...data.map((dado) => dado.id));
		}
		
		currentId = currentId + 1;
		
		const novoDado = {
			id: currentId,
			...item
		};
		
		data.push(novoDado);
		await salvarDados(key, data);
	} catch (error) {
		throw new Error(error.message);
	}
};

export const editarDados = async (key, id, newItem) => {
	const data = await consultarDados(key);
	const index = data.findIndex((item) => item.id === id);
	
	if (index !== -1) {
		data[index] = {...data[index], ...newItem};
		await salvarDados(key, data);
	} else {
		throw new Error("Item não encontrado.");
	}
};

export const removerDados = async (key, id) => {
	try {
		const data = await consultarDados(key);
		const newData = data.filter((item) => item.id !== id);
		await salvarDados(key, newData);
	} catch (error) {
		throw new Error("Falha ao remover os dados. Tente novamente!");
	}
};
