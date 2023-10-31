import React, { useState } from "react";
import './congratulations.css'
import LigthButton from "../light-button/ligth-button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Counter from "../conter/conter";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Congratulations() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div style={{marginTop: '2rem'}} onClick={handleOpen}>
                <LigthButton>Enviar</LigthButton>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" sx={{textAlign: 'center'}} component="h2">
                    Parabéns!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                            Saldo total de R$<Counter target={180}></Counter><h1>,00</h1>
                        </div>
                    </Typography>
                    <Typography sx={{color:"gray"}}>
                        Você acabou de ganhar R$ 150,00 de um de nossos usuários
                    </Typography>
                    <Typography sx={{color:"gray"}}>
                        Para liberar o saldo assista o vídeo com as instruções clicando no botão abaixo
                    </Typography>
                    <div style={{ display: "flex", justifyContent:"center", margin: "20px"}}>
                        <LigthButton route="/watch-video">Assistir Vídeo</LigthButton>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Congratulations