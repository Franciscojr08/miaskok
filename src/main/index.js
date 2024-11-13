import {Container,} from "./styled.js";
import TelaInicio from "../components/TelaInicio";
import Toast from "react-native-toast-message";
import Header from "../components/Header";
import Navigator from "../components/Navigator";

export default function Main() {

	return (
		<Container>
			<Toast />
			<Navigator />
		</Container>
	)
}