import React from 'react'
import styled from 'styled-components'

import BoxSlider from '../utility/BoxSlider'
import { withNavContext } from '../contexts/NavContext'

const LandingContent = styled.div`
  width: 100%;
  height: 100%;
`

function LandingPage({ isLeft }) {
  return (
    <LandingContent className="landingPage">
      <BoxSlider className="boxSlider lpContent" isLeft={isLeft}>
        <h1>Synthesize Sight and Sound</h1>
        <p>Create an artistic interpretation of anything from your child's first words to your favorite song.</p>
      </BoxSlider>
    </LandingContent>
  )
}

export default withNavContext(LandingPage)
