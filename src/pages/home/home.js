import React from "react";
import logo from '../../meuvelhoricologo-removebg-preview-1.png'
import Header from "../../components/header/header";
import image from '../../balao-de-fala-com-cifrao.png'
import { Button, Container } from "@mui/material";
import { BiDonateHeart} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

import './home.css'
import Footer from "../../components/footer/footer";

function HomeComponent() {
    const navigate = useNavigate()

    return (
        <>
            <Header><img class="logo" src={logo}></img></Header>
            <Container>
                <div class="home-container">
                    <img class="dialog" src={image}></img>
                    <div class="text-container">
                        <div class="descriptions">Acabamos de liberar seu acesso para conversar com alguns HOMENS RICOS em nosso aplicativo</div>
                        <div class="descriptions">FAÇA 4 AVALIAÇÕES E REALIZE SEU PRIMEIRO SAQUE!</div>
                        <div class="descriptions">🟢 Atualmente temos 47 homens online</div>
                        <Button onClick={() => {navigate('/review')}} style={{backgroundColor: "#FF00AC"}} variant="contained"><BiDonateHeart style={{marginRight: "3px"}}></BiDonateHeart> COMEÇAR</Button>
                    </div>
                </div>
                <div class="notification-container">
                    <div class="descriptions">
                        Nosso sistema possui uma inteligência artificial para verificar a autenticidade dos perfis,
                        além disso temos uma equipe de verificação trabalhando em paralelo e NÃO TOLERAMOS perfis masculinos que não condizem com a realidade.
                        Estamos batalhamos dia após dia para manter nossa comunidade engajada e com pessoas reais. Qualquer suspeita de perfis falsos,
                        faça uma denuncia imediatamente através do nosso e-mail contato.velhorico@gmail.com  que iremos avaliar o caso.
                    </div>
                </div>
            </Container>
          <Footer></Footer>

        </>

    )
}

export default HomeComponent;