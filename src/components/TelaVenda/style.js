import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #000;
    flex: 1;
`;

export const VendaView = styled.View`
	flex: 1;
`;

export const VendaEmptyContainer = styled.View`
	margin-top: 70px;
    justify-content: center;
    align-items: center;
`;

export const VendaEmptyImage = styled.Image`
    width: 150px;
    height: 150px;
`;

export const FiltroView = styled.View`
	justify-content: center;
	align-items: center;
    margin: 24px 20px 0;
    padding: 15px 20px;
    background-color: #ffffff;
`;

export const Input = styled.TextInput`
    padding: 12px 5px;
    width: 300px;
    border: 1px solid rgba(204,204,204,0.5);
    border-radius: 4px;
    margin-top: 10px;
	text-align: center;
`;