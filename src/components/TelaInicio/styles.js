import styled from "styled-components/native";

export const Container = styled.View`
    background-color: black;
    height: 100%;
    flex-direction: column;
`;

export const ButtonsContainer = styled.View`
    gap: 30px;
    padding: 150px 70px;
    flex-direction: column;
    justify-self:center;
`;

export const IconsContainer = styled.View`
    justify-content: center;
    flex-direction: row;
    padding-top: 10px;
    gap: 12px;
`;

export const MenuIcon = styled.Image`
    width: 32px;
    height: 32px;
    resize-mode: contain;
`;