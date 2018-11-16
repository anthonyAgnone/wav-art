import React, { Component } from 'react'
import { withCanvasContext } from '../contexts/CanvasContext'
import styled from 'styled-components'

const Upload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  & label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
  }
`

class Uploader extends Component {
  render() {
    return (
      <form>
        <Upload name="file" onChange={this.props.handleFileUpload} type="file" ref={this.props.uploader} />
        <label for="file">Choose a file</label>
      </form>
    )
  }
}

export default withCanvasContext(Uploader)
