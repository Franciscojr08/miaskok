import {Text} from "../Text";
import {Container} from "./style";

export default function Button({ children, onPress, disable, primary = true}) {
	return (
		<Container onPress={onPress} disable={disable} primary={primary}>
			<Text color="black" weight={600}>{children}</Text>
		</Container>
	);
}

/* versão anterior -Francisco

<Container onPress={onPress} disable={disable} primary={primary}>
			<Text color={primary ? "#ffffff" : "#333"}>{children}</Text>
		</Container>
		
*/