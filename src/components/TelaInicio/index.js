import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";
import { calcularMediaVendasPorEvento } from "../../service/vendaService"; //import da função calculo de media por eventos *Lennon
import Button from "../Button";
import { ButtonsContainer, Container, IconsContainer, MenuIcon } from "./styles";
import instagram from '../../assets/images/instagramIcon.png';
import mapa from '../../assets/images/mapaIcon.png';
import whatsapp from '../../assets/images/whatsappIcon.png';

export default function TelaInicio() {
  const [modalVisible, setModalVisible] = useState(false);
  const [mediaVendas, setMediaVendas] = useState(null);

  const handleEstatisticasClick = async () => {
    const media = await calcularMediaVendasPorEvento();
    setMediaVendas(media);
    setModalVisible(true);
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
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/miaskok.dermocosmeticos/")}>
            <MenuIcon source={instagram} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/maps/place/Miaskok+Dermocosm%C3%A9ticos/@-10.9256196,-37.045888,15z/data=!4m2!3m1!1s0x0:0xacb074b49b94bdd3?sa=X&ved=1t:2428&ictx=111")}>
            <MenuIcon source={mapa} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://api.whatsapp.com/send?phone=5579991613716&text=Oi%2C+pode+me+ajudar%3F+")}>
            <MenuIcon source={whatsapp} />
          </TouchableOpacity>
        </IconsContainer>
      </Container>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      > 
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}> 
          <View style={{ width: 300, padding: 20, backgroundColor: "white", borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
              Média de Vendas por Evento:
            </Text>
            {/* Alteração da moeda "currency" para Real, deixando mais intuitiva a visualização @Lennon */}

            <Text style={{ fontSize: 16, marginBottom: 20 }}>
                {mediaVendas !== null ? "R$ " + mediaVendas.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) : "Carregando..."}
            </Text> 
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 16, color: "#550AB1", textAlign: "center" }}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
