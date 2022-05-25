import React, { useState } from 'react';
import axios from 'axios';
import '../../style.css';
import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';
import { Main, Mensagem, Usuario, Enviar, Erro } from './styled';



export default function Home() {
  const navigate = useNavigate();
  const [ erro, setErro ] = useState(false);
  const [ usuario, setUsuario ] = useState("");
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
        const repositorios = response.data;
        const nomeRepositorios = [];

        repositorios.map(repositorio => {
            nomeRepositorios.push(repositorio.name);
            return
        })
        localStorage.setItem("repositorios" , JSON.stringify(nomeRepositorios));
        localStorage.setItem("usuario", usuario);
        navigate('/repositorios');
    }).catch(() => {
      setErro(true);
    });
  }
  
  return (
    <>
       <Header title="home" />
        <Main>
            <Mensagem>Digite o nome do usuário para ver os seus Repositórios do GitHub:</Mensagem>
            <div>
                <Usuario type="text" placeholder="Usuário" value={usuario} onChange={ e => setUsuario(e.target.value)} />
                <Enviar type="button" onClick={handlePesquisa}>Pesquisar</Enviar>
            </div>
            {erro ? <Erro>Nome de Usuário Inválido! Tente novamente.</Erro> : ''}
        </Main>
    </>
  );
}