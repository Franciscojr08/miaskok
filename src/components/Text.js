import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: 'GeneralSans-600';
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size ? `${size}px` : '15px'};
  opacity: ${({ opacity }) => opacity || 1};
`;
