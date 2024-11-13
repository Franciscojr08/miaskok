//*Lennon
import React from 'react';
import { Text } from "../Text";
import { GradientContainer, Container } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Button({ children, onPress, disable, primary = true, icon }) {
  return (
    <Container onPress={onPress} disabled={disable}>
      <GradientContainer>
        {icon && <AntDesign name={icon} size={20} color={primary ? 'black' : 'gray'} style={{ marginRight: 8 }} />}
        <Text color={primary ? 'black' : 'gray'} weight={600}>
          {children}
        </Text>
      </GradientContainer>
    </Container>
  );
}





/* versão anterior -Francisco

<Container onPress={onPress} disable={disable} primary={primary}>
			<Text color={primary ? "#ffffff" : "#333"}>{children}</Text>
		</Container>
		
*/

