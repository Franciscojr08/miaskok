import React, {useEffect, useState} from "react";
import {
	View,
	TouchableOpacity,
	Linking
} from "react-native";
import {calcularMediaVendasPorEvento, calcularValorTotalDasVenda} from "../../service/vendaService"; //import da função calculo de media por eventos *Lennon
import Button from "../Button";
import {ButtonsContainer, Container, IconsContainer, MenuIcon} from "./styles";
import instagram from '../../assets/images/instagramIcon.png';
import mapa from '../../assets/images/mapaIcon.png';
import whatsapp from '../../assets/images/whatsappIcon.png';
import ModalEstatistica from "../ModalEstatistica";
import {consultarEventos} from "../../service/eventoService";

export default function TelaInicio() {
	const [modalEstatisticaVisible, setModalEstatisticaVisible] = useState(false);
	const [mediaVendas, setMediaVendas] = useState(null);
	const [totalEventos,setTotalEventos] = useState(0)
	const [valorTotalVendas,setValorTotalVendas] = useState(0)
	
	useEffect(() => {
		const consultarTotalEventos = async () => {
			const eventos = await consultarEventos()
			setTotalEventos(eventos.length)
		}
		
		consultarTotalEventos()
	}, [])
	
	const handleEstatisticasClick = async () => {
		const media = await calcularMediaVendasPorEvento();
		const valorTotalVendas = await calcularValorTotalDasVenda();
		setMediaVendas(media);
		setValorTotalVendas(valorTotalVendas)
		setModalEstatisticaVisible(true);
	};
	
	return (
		<View>
			<Container>
				<ButtonsContainer>
					<Button icon="calendar" onPress={() => {/* Navegação para eventos */}}>EVENTOS</Button>
					<Button icon="shoppingcart" onPress={() => {/* Navegação para vendas */}}>VENDAS</Button>
					<Button icon="tags" onPress={() => {/* Navegação para produtos */}}>PRODUTOS</Button>
					<Button icon="barschart" onPress={handleEstatisticasClick}>ESTATÍSTICAS</Button>
				</ButtonsContainer>
				{/* ^ Adição de icones aos botões ^ - @Lennon */}
				<IconsContainer>
					<TouchableOpacity
						onPress={() => Linking.openURL("https://www.instagram.com/miaskok.dermocosmeticos/")}>
						<MenuIcon source={instagram}/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => Linking.openURL("https://www.google.com/maps/place/Miaskok+Dermocosm%C3%A9ticos/@-10.9256196,-37.045888,15z/data=!4m2!3m1!1s0x0:0xacb074b49b94bdd3?sa=X&ved=1t:2428&ictx=111")}>
						<MenuIcon source={mapa}/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => Linking.openURL("https://api.whatsapp.com/send?phone=5579991613716&text=Oi%2C+pode+me+ajudar%3F+")}>
						<MenuIcon source={whatsapp}/>
					</TouchableOpacity>
				</IconsContainer>
			</Container>
			
			<ModalEstatistica
				visible={modalEstatisticaVisible}
				onClose={() => setModalEstatisticaVisible(false)}
				mediaVendas={mediaVendas}
				totalEventos={totalEventos}
				valorTotalVendas={valorTotalVendas}
			/>
		</View>
	);
}
