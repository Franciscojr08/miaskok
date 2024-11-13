import {Container,} from "./styled.js";
import TelaInicio from "../components/TelaInicio";
import Toast from "react-native-toast-message";
import Header from "../components/Header";
import TelaVenda from "../components/TelaVenda";

export default function Main() {

	return (
		<Container>
			<Header/>
			<Toast />
			
			<TelaVenda />
			{/*<TelaInicio />*/}
		</Container>
	)
}