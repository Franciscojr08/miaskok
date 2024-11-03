import {TouchableOpacity} from 'react-native'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.png'
import { Container, ImageContainer, MenuIcon } from './styles'


export default function Header(){

    return (
        <Container>
            
            <TouchableOpacity>
                <MenuIcon source={menu}/>
            </TouchableOpacity>

            <ImageContainer source={logo}/>
            

        </Container>

    )
    
}