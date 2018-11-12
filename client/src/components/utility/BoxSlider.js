import React from 'react'
import styled from 'styled-components'

function BoxSlider({ className, children, isLeft }) {
  const StyledBox = styled.div`
    width: 50%;
    height: 100%;
    background-color: #d8f4f8;
    color: #07b6e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${isLeft ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s linear;
    z-index: 300;
    & {
      h1 {
        font-family: 'Changa One', cursive;
        font-size: 4.67em;
        text-align: left;
        max-width: 80%;
        padding: 0 10%;
      }
      p {
        max-width: 80%;
        text-align: left;
        padding: 0 10%;
        font-size: 1.5em;
        color: #374952;
        font-weight: 500;
      }
    }
  `
  return <StyledBox className={className}>{children}</StyledBox>
}

export default BoxSlider
