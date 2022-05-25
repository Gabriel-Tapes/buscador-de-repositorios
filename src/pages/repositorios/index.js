import React, { useEffect, useState } from "react";
import Header from '../../components/header'
import { Main, Repositorio } from "./styled";
import { useNavigate } from "react-router-dom";


export default function Repositorios() {
    const [ repositorios, setRepositorios ] = useState([]);
    const navigate = useNavigate();
    const [ usuario, setUsuario ] = useState("");
    useEffect(() => {
        let usuario = localStorage.getItem("usuario");
        let nomeRepositorios = localStorage.getItem('repositorios');

        if (nomeRepositorios !== null) {
            nomeRepositorios = JSON.parse(nomeRepositorios);
            setUsuario(usuario);
            setRepositorios(nomeRepositorios);
            localStorage.clear();
        } else {
            navigate("/");
        }

    }, [navigate])

    return (
        <>
            <Header />
            <Main>
                { repositorios.map( (repositorio) => {
                    return(
                        <Repositorio href={`https://github.com/${usuario}/${repositorio}`} target="_blank"> Repositório: { repositorio } </Repositorio> 
                    )
                }) }
            </Main>
        </>
    )
}