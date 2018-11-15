import React from 'react';
import { withCanvasContext } from '../contexts/CanvasContext';
import styled from 'styled-components';

const CanvasElement = styled.canvas`
    width: 700px;
    height: 700px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
`

function Canvas({ canvas, ...props }) {
    return (
        <CanvasElement ref={canvas} />
    )
}

export default withCanvasContext(Canvas);
