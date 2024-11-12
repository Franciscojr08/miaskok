import styled from "styled-components/native";


export const Produto = styled.View`
	background-color: #ffffff;
    margin: 24px 20px 0;
    padding: 15px 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    gap: 10px;
`;

export const ProdutoBody = styled.View`
	gap: 5px;
`;

export const ProdutoFooter = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const ProdutoActions = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const ProdutoIcon = styled.Image`
	width: 16px;
	height: 16px;
	resize-mode: contain;
`;