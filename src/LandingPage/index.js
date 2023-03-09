import React from "react";
import './index.css'

export default function LandingPage() {
    return (
        <div className="modo-claro">
            <header className="header">
                <div className="header-container limitar-largura">
                    <img className="logo" src="./assets/img/barbearia-logo.png" alt="logo"/>
                    <button className="botao"><img src="./assets/img/moon.png" alt="icone"/>Dark</button>
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
        </div>
    )
}