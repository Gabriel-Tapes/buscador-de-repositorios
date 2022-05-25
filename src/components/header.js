import React from "react";
import { Cabecalho, Titulo, Logo, Voltar } from './styled'


export default function Header(props) {

    return (
        <>
            <Cabecalho >
                <Titulo>Buscador de Repositórios
                    <Logo className="fa-brands fa-github"></Logo>
                </Titulo>
                {props.title === "home" ? "" : <Voltar to="/">Voltar</Voltar>}
            </Cabecalho>
        </>
    );
}