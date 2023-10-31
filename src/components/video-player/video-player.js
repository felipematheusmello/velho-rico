import React, { useRef, useState } from 'react';
import './video-player.css'

import videoSrc from './meu-velho-rico.mp4'

function VideoPlayer() {
    const videoRef = useRef(null);
    const [player, setPlayer] = useState(false)
    const handlePlayClick = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        setPlayer(!player)
        console.log(video.duration)
    };

    return (
        <div class="container-video">
            <video ref={videoRef} src={videoSrc} controls={false}></video>
            <svg  onClick={handlePlayClick} fill='#FFFF' style={{opacity: player? '0' : '1'}} className="play-button" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>
        </div>
    )
}

export default VideoPlayer