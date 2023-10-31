import React, { useEffect, useState } from 'react';
import './counter-banner.css'

function CounterBanner() {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * (300 - 100) + 100))

    const generateRandomNumber = (max, min) => {
        setRandomNumber( randomNumber + Math.floor(Math.random() * (max - min) + min) )
    }

    useEffect(() => {
        setTimeout(() => {
            generateRandomNumber(4, 1)
        }, 5000)
    }, [randomNumber])

    return (
        <div>Há {randomNumber} pessoas assistindo esse vídeo</div>
    )
}

export default CounterBanner