import React, { Component } from 'react'
import {withCanvasContext} from '../contexts/CanvasContext'

class Uploader extends Component {
    render() {
        return (
           <form >
               <input onChange={this.props.handleFileUpload}type="file" ref={this.props.uploader}/>
               <button type="submit">Upload</button>
           </form>
        )
    }
}

export default withCanvasContext(Uploader)