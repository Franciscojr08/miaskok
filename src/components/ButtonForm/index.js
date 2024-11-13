import {Text} from "../Text";
import {Container} from "./style";

export default function ButtonForm({ children, onPress, disable, primary = true}) {
	return (
		<Container onPress={onPress} disable={disable} primary={primary}>
			<Text color={primary ? "#ffffff" : "#333"}>{children}</Text>
		</Container>
	);
}