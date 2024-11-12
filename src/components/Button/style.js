//Estilização @Lennon
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const GradientContainer = styled(LinearGradient).attrs(() => ({
  colors: ['#B0B0B0', '#E0E0E0', '#FFFFFF', '#E0E0E0', '#B0B0B0'],
  start: { x: 0.3, y: 0 },
  end: { x: 0.7, y: 1 },
}))`
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.TouchableOpacity`
  border-radius: 8px;
  overflow: hidden; /* Garante que o LinearGradient siga o formato do botão */
`;

