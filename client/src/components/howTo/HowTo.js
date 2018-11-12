import React from 'react'

import BoxSlider from '../utility/BoxSlider'
import { withNavContext } from '../contexts/NavContext'

function HowTo({ isLeft }) {
  return (
    <div className="howToPage">
      <BoxSlider className="boxSlider htContent" isLeft={isLeft}>
        <h1>How to Use</h1>
        <p>this is the how to use page</p>
      </BoxSlider>
    </div>
  )
}

export default withNavContext(HowTo)
