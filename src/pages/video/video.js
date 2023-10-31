import React from "react";
import './video.css'
import { Container } from "@mui/material";
import Header from "../../components/header/header";
import CounterBanner from "../../components/counte-banner/counter-banner";
import VideoPlayer from "../../components/video-player/video-player";
import LigthButton from "../../components/light-button/ligth-button";
import { FaUnlock } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import SocialProve from "../../components/social-prove/social-prove";

function Video() {
    const [finishTimer, setFinishTimer] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setFinishTimer(true)
      },660000)
    }, [])
    return (
        <>
            <Header><CounterBanner></CounterBanner></Header>
            <Container>
                <h5 style={{color:"#FF0094", fontSize: "20px"}}>ATENÇÃO: Esse vídeo sairá do ar em alguns minutos.</h5>
                <img width="103%"src="https://meusvelhosricos.online/wp-content/uploads/2023/10/HEADLINE-768x154.png"></img>
            </Container>
            <VideoPlayer></VideoPlayer>
            {
                finishTimer ?
                <div style={{marginTop: "10px"}}>
                    <LigthButton><a style={{textDecoration: 'none', color: '#FFFF'}} href="https://pepper.com.br/checkout/index.html?p=90296&o=103273">SOMENTE HOJE POR R$29,90 <span>Clique aqui para receber seu acesso</span></a></LigthButton>
                </div>
                :
                <div className='description'><FaUnlock style={{color:"#FF0094"}}/> SEU ACESSO SERÁ LIBERADO NO FINAL DO VÍDEO </div>
            }
            <div>
                <div style={{ margin: "0 auto"}}><img style={{ width:"100px" }} src="https://meusvelhosricos.online/wp-content/uploads/2023/10/PROVA-EMISSORA.png"></img></div>
                <div class="elementor-widget-container"><p><strong>ISSO FOI ASSUNTO NAS MAIORES EMISSORAS DE TELEVISÃO DO BRASIL !</strong></p></div>
            </div>

            <h1 style={{ color: '#FF0094'}}>O QUE ELAS ESTÃO FALANDO...</h1>
            <SocialProve></SocialProve>
            <div style={{ padding: '8px'}}>Copyright ©2023 – Todos os direitos reservados. Velho Rico.</div>
        </>
    )
}

export default Video