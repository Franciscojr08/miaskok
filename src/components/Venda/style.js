import styled from "styled-components/native";


export const Venda = styled.View`
    flex: 1;
	background-color: #ffffff;
    margin: 24px 20px 0;
    padding: 15px 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    gap: 15px;
`;

export const VendaBody = styled.View`
	gap: 5px;
`;

export const VendaFooter = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const VendaActions = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const VendaIcon = styled.Image`
	width: 16px;
	height: 16px;
	resize-mode: contain;
`;