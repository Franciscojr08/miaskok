import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
	background-color: ${(props) => props.disable ? "#999" : props.primary ? '#FA824C' : '#FFFFFF'};
	padding: 14px 24px;
	align-items: center;
	border-radius: 8px;
	border: 1px solid #FA824C;
`;