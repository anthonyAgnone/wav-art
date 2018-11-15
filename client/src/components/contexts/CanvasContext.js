import React, { Component, createRef, createContext } from 'react';

const { Provider, Consumer } = createContext();

export default class CanvasContext extends Component {
    constructor() {
        super();
        this.state = {
            src: "",
            isPlaying: false,
        }
        this.ctx = null
        this.analyser = null
        this.canvas = createRef();
        this.uploader = createRef();
        this.audioPlayer = createRef();
        this.handleFileUpload = this.handleFileUpload.bind(this)
    }
    onPlay = () => {
        this.setState({
            isPlaying: true
        }, this.draw)
    };
    setupWebAudio = () => {
        const audio = this.audioPlayer.current;

        const audioContext = new AudioContext();
        this.analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(audio);
        source.connect(this.analyser);
        this.analyser.connect(audioContext.destination);
        audio.addEventListener('play', this.onPlay);
        audio.addEventListener('pause', () => {
            this.setState({
                isPlaying: false
            })
        });
    };
    interpretAudio = () => {
        // does stuff with audio analyzer
        const audioData = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(audioData);
        return {
            audioData,
            // more properties
        }
    }
    display = ({ audioData }) => {
        const canvas = this.canvas.current;
        this.ctx = canvas.getContext('2d');
        this.ctx.fillStyle = `rgb(${audioData[10]},${audioData[2]},${audioData[5]})`;
        this.ctx.fillRect(audioData[1],audioData[1], audioData[0], audioData[0])
        this.ctx.fillRect(10,10, 100, 100)

        // this.ctx.fillRect(-.5 * audioData[1] + 50, .5 * audioData[1] + 50, audioData[0] * .15, audioData[0] * .15)
        // this.ctx.fillRect(.5 * audioData[0] + 150, -.5 * audioData[0] + 100, audioData[343] * .15, audioData[44] * .15)
        // this.ctx.fillRect(-.5 * audioData[0] + 150, -.5 * audioData[0] + 100, audioData[87] * .15, audioData[133] * .15)


        // (canvas.width / 255) * 
        // (canvas.height / 255) *

    }
    draw = () => {
        if (this.state.isPlaying) {
            requestAnimationFrame(this.draw);
            this.display(this.interpretAudio());
        }
    };

    getRandomColor = () => {
        return (Math.random() * 255) >> 0;
    };


    // handle fileupload
    handleFileUpload = e => {
        e.preventDefault();
        this.setState({ src: URL.createObjectURL(this.uploader.current.files[0]) }, this.setupWebAudio)

    }
    // process the file data
    // handle image save









    render() {
        const value = {
            canvas: this.canvas,
            uploader: this.uploader,
            audioPlayer: this.audioPlayer,
            handleFileUpload: this.handleFileUpload,
            ...this.state
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withCanvasContext = C => props => (
    <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
)
