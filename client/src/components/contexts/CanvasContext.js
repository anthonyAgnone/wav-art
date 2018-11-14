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

    draw = () => {
        const canvas = this.canvas.current;
        if (this.state.isPlaying) requestAnimationFrame(this.draw);
        const freqByteData = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(freqByteData);
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx = canvas.getContext('2d');
        this.ctx.fillStyle = `rgb(${freqByteData[0]},${freqByteData[1]},${freqByteData[2]})`;
        this.ctx.fillRect(5, 10, freqByteData[0], 100)
        // this.ctx.fillRect(0 + 300, canvas.currentheight - freqByteData[0] * 1.5, 10, canvas.height);
        // this.ctx.strokeRect(0 + 300, canvas.height - freqByteData[0] * 1.5, 10, canvas.height);
    };

    getRandomColor = () => {
        return (Math.random() * 255) >> 0;
    };


    // handle fileupload
    handleFileUpload = e => {
        e.preventDefault();
        // alert(URL.createObjectURL(this.uploader.current.file[0].name )
        // alert(this.uploader.current.files[0])
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
