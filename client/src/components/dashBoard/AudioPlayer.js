import React from 'react';
// import tempSrc from "./assets/vivaldi.mp3"
import { withCanvasContext } from '../contexts/CanvasContext';

function AudioPlayer({audioPlayer, src}) {
    return (
        <div>
            <audio ref={audioPlayer} controls src={src} async></audio>
        </div>
    )
}

export default withCanvasContext(AudioPlayer)
