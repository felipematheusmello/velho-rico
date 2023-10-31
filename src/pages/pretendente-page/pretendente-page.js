import React, { useState } from 'react'
import './pretendente-page.css'
import { pretendentes } from '../review/pretendentes'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material';
import LigthButton from '../../components/light-button/ligth-button';
import Header from '../../components/header/header';
import Counter from '../../components/conter/conter';
import logo from '../../meuvelhoricologo-removebg-preview-1.png';
import CustomImage from '../../components/image/image';
import Congratulations from '../../components/congratulations/congratulations';
import Footer from '../../components/footer/footer';


function PretendenteComponente() {
    const [questOne, setQuestOne] = useState({first: false, secound: false})
    const [questTwo, setQuestTwo] = useState({first: false, secound: false})

    const { id } = useParams();
    const pretendente = pretendentes.find(pretendenteParametro => pretendenteParametro.id == id);

    const select_answer_one = (answer) => {
        let baseAnswer = {first: false, secound: false};
        baseAnswer[answer] = true;
        console.log(baseAnswer)
        setQuestOne(baseAnswer);
    }

    const select_answer_two = (answer) => {
        let baseAnswer = {first: false, secound: false};
        baseAnswer[answer] = true;
        console.log(baseAnswer)
        setQuestTwo(baseAnswer)
    }

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
        <Container>
            <h1 >{pretendente.name}</h1>
            <p> está oferecendo R$ 150 para iniciar o chat.</p>
            <CustomImage src={pretendente.img}></CustomImage>
            <h2 class='pretendente-description'>{pretendente.description}</h2>
            <div class="questions-container">
                <h2> {pretendente.name} gostaria de saber qual a média da sua idade?</h2>
                <div className='answers'>
                    <div style={{marginRight: '12px'}} ><LigthButton click={select_answer_one} argument={'first'} isActive={questOne.first} >18 á 34</LigthButton></div>
                    <div ><LigthButton click={select_answer_one} argument={'secound'}  isActive={questOne.secound}>35 á 60</LigthButton></div>
                </div>
            </div>
            <div class="questions-container">
                <h2> {pretendente.name} gostaria de saber se você é comprometida?</h2>
                <div className='answers'>
                    <div style={{marginRight: '12px'}}><LigthButton click={select_answer_two} argument={'first'} isActive={questTwo.first} >Sim</LigthButton></div>
                    <div><LigthButton  click={select_answer_two} argument={'secound'} isActive={questTwo.secound}>Não</LigthButton></div>
                </div>
            </div>

            <Congratulations></Congratulations>
        </Container>
      <Footer></Footer>

        </>
    )
}

export default PretendenteComponente