import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cabecalho = styled.header`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Titulo = styled.h1`
    color: whitesmoke;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    margin: 20px 0px 0px 0px;
`;

export const Logo = styled.i`
    font-size: 40px;
    color: rgb(9, 39, 39);
    margin: 10px;
`;

export const Voltar = styled(Link)`
    width: 150px;
    height: 40px;
    background: linear-gradient(to right, rgb(254, 193, 195) 50%, rgb(233, 97, 68) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    border-radius: 5px;
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
    margin-left: 100px;
    cursor: pointer;
    color: rgb(41, 43, 35);
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 500ms;

    &:hover {
        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
        background-position: right bottom;
        color: whitesmoke;
    }

    @media (max-width: 750px) {
        margin: 10px auto;
    }
`