import styled from 'styled-components';

export const Main = styled.main`
    margin: none;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Mensagem = styled.p`
    color: whitesmoke;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
    font-weight: 600;
`;

export const Usuario = styled.input`
    min-height: 30px;
    min-width: 300px;
    padding: 0 5px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
    font-size: 14px;

    @media (max-width: 400px) {
        min-width: 40%;
    }
`;

export const Enviar = styled.button`
    background: linear-gradient(to right, rgb(34, 193, 195) 50%, rgb(253, 187, 45) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    height: 32px;
    border-radius: 0px 10px 10px 0px;
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    color: rgb(41, 43, 35);
    font-weight: 500;
    font-size: 14px;
    transition: 500ms;

    &:hover {
        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
        background-position: right bottom;
    }
`;

export const Erro = styled.p`
    color: red;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`