import React, { useState } from "react";
import './index.css'

export default function LandingPage() {
    
    const modoClaro = "modo-claro"
    const modoEscuro = "modo-escuro"

    const [novoEstilo, setNovoEstilo] = useState(true)

    const mudaEstilo = () => {
        setNovoEstilo(!novoEstilo)
    }

    return (
        <div className={novoEstilo ? modoClaro : modoEscuro}>
            <header className="header">
                <div className="header-container limitar-largura">
                    <img className="logo" src="./assets/img/barbearia-logo.png" alt="logo"/>
                    <button className="botao" onClick={mudaEstilo}>
                        <img src={novoEstilo ? "./assets/img/moon.png" : "./assets/img/sun.png"} alt="icone"/>
                        <p className={novoEstilo ? "modo-claro" : "modo-escuro"}>
                            {novoEstilo ? "Dark" : "Light"}
                        </p>
                    </button>
                </div>
            </header>

            <section className="banner"></section>

            <section className="content limitar-largura">
                <div className="limitar-largura">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    
                    <p className="assinatura">S. Kelly</p>
                </div>
            </section>

            <footer className="footer">Desenvolvido por Leozizz</footer>
        </div>
    )
}