import React from "react";
import logo from '../../meuvelhoricologo-removebg-preview-1.png'
import Header from "../../components/header/header";
import { Container } from "@mui/material";

import './review.css'
import LigthButton from "../../components/light-button/ligth-button";
import Counter from "../../components/conter/conter";
import { pretendentes } from "./pretendentes";
import CustomImage from "../../components/image/image";
import Footer from "../../components/footer/footer";

function ReviewComponent() {
    return (
        <>
            <Header>
                <div class="header-container-review">
                    <div class="logo-review">
                        <img src={logo}></img>
                    </div>
                        <h1>R$</h1><Counter target={30}></Counter><h1>,00</h1>
                </div>
            </Header>
            <Container style={{marginTop: '2rem'}}>
                <h1 class="titles-review">COMECE A CONVERSAR AGORA MESMO PARA GANHAR</h1>
                <p class="description-review" style={{marginTop:'3rem'}}>Aproveite, você já ganhou </p>
                <p class="description-review">R$30,00!</p>

                <h1 id="choose" style={{ marginTop:'5rem'}}>ESCOLHA UM DOS INTERESSADOS:</h1>

            </Container>

            <div style={{columns: '2', columnGap: '0'}}>
             {pretendentes.map((pretendente) => (
                <>
                    <div>
                        <CustomImage src={pretendente.img}></CustomImage>
                    </div>
                    <div>
                        <LigthButton route={`/pretendente/${pretendente.id}`} options={{id:pretendente.id}}>{pretendente.name}</LigthButton>
                    </div>
                </>
             ))}
            </div>
            <div >
                <div class="descriptions" style={{textAlign: 'left', margin:"20px"}}>
                    Nosso sistema possui uma inteligência artificial para verificar a autenticidade dos perfis,
                    além disso temos uma equipe de verificação trabalhando em paralelo e NÃO TOLERAMOS perfis masculinos que não condizem com a realidade.
                    Estamos batalhamos dia após dia para manter nossa comunidade engajada e com pessoas reais. Qualquer suspeita de perfis falsos,
                    faça uma denuncia imediatamente através do nosso e-mail contato.velhorico@gmail.com  que iremos avaliar o caso.
                </div>
            </div>
          <Footer></Footer>

        </>

    )
}

export default ReviewComponent;