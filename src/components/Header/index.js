import { Alert, TouchableOpacity } from 'react-native'
import logo from '../../assets/images/logo.png'
import voltar from '../../assets/images/voltar.png'
import { Container, ImageContainer, BackContainer, ContainerPrincipal, ContainerSecundario } from './styles'
import {useNavigation} from "@react-navigation/native";
import { Text } from '../Text';
import { useRoute } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();
    const route = useRoute();


    if(route.name === 'TelaInicio'){
        return(
            <ContainerPrincipal>
                {console.log('aaaaaaaa')}
                <TouchableOpacity onPress={() => navigation.navigate('TelaInicio')}>
                    <ImageContainer source={logo} />
                </TouchableOpacity>
            </ContainerPrincipal>
        )
    }else{
    return (
        <ContainerSecundario>
            {console.log('bbbbb')}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackContainer source={voltar}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TelaInicio')}>
                <ImageContainer source={logo} />
            </TouchableOpacity>  
        </ContainerSecundario>
    )
    }
}
