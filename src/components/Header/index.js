import { TouchableOpacity } from 'react-native'
import logo from '../../assets/images/logo.png'
import { Container, ImageContainer } from './styles'
import {useNavigation} from "@react-navigation/native";

export default function Header() {
    const navigation = useNavigation();

    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('TelaInicio')}>
                <ImageContainer source={logo} />
            </TouchableOpacity>
        </Container>
    )
}