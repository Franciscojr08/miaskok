import {Container,} from "./styled.js";
import Toast from "react-native-toast-message";
import Navigator from "../components/Navigator";

export default function Main() {

	return (
		<Container>
			<Toast />
			<Navigator />
		</Container>
	)
}