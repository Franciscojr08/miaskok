import { Container, Add } from './style';
import { Text } from '../Text';


export default function PlusButton({onPress}){

  return (
    <Container onPress={onPress}>

      <Add>
        <Text color="black" size={35}>+</Text>
      </Add>

    </Container>

  );
}