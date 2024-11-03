import {Container} from "./styled.js";
import TelaInicio from "../components/TelaInicio";
import Toast from "react-native-toast-message";


export default function Main() {
	return (
		<Container>
			<Toast />
			<TelaInicio />
		</Container>
	)
}