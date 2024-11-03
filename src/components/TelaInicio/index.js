import { TouchableOpacity, View } from "react-native";
import Button from "../Button";
import Header from "../Header";
import { ButtonsContainer, Container, IconsContainer, MenuIcon } from "./styles";
import instagram from '../../assets/images/instagramIcon.png'
import mapa from '../../assets/images/mapaIcon.png'
import whatsapp from '../../assets/images/whatsappIcon.png'
import { Linking } from "react-native";

export default function TelaInicio() {

    return(
        <View>
            <Header/>
            
            <Container>
                <ButtonsContainer>
                    <Button children={'EVENTOS'}></Button>
                    <Button children={'VENDAS'}></Button>
                    <Button children={'PRODUTOS'}></Button>
                    <Button children={'ESTATÍSTICAS'}></Button>
                </ButtonsContainer>
                
                <IconsContainer>
                    <TouchableOpacity onPress={ () => Linking.openURL("https://www.instagram.com/miaskok.dermocosmeticos/")}>
                        <MenuIcon source={instagram}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => Linking.openURL("https://www.google.com/maps/place/Miaskok+Dermocosm%C3%A9ticos/@-10.9256196,-37.045888,15z/data=!4m2!3m1!1s0x0:0xacb074b49b94bdd3?sa=X&ved=1t:2428&ictx=111")}>
                        <MenuIcon source={mapa}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => Linking.openURL("https://api.whatsapp.com/send?phone=5579991613716&text=Oi%2C+pode+me+ajudar%3F+")}>
                        <MenuIcon source={whatsapp}/>
                    </TouchableOpacity>
                </IconsContainer>
                
            </Container>
            
            
        </View>
    )

}