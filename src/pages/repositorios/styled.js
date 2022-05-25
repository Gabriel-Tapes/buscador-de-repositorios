import styled from 'styled-components';

export const Main = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Repositorio = styled.a`
    margin: 5px;
    color: whitesmoke;
    text-decoration: none;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
    font-size: 20px;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.6);
    height: 50px;
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        font-size: 24px;
        background-color: rgba(0, 0, 0, 0.8);
    }
`