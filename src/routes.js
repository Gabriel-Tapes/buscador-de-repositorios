import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Repositorios from "./pages/repositorios/index";
import Home from "./pages/home/index";

export default function Rotas() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" exact element={ <Home /> } />
                <Route path="/repositorios" element={ <Repositorios /> } />
            </Routes>
        </BrowserRouter>
    )
}
