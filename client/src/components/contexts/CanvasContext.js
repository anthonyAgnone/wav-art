import React, { Component, createRef, createContext } from 'react'

const { Provider, Consumer } = createContext()

export default class CanvasContext extends Component {
  constructor() {
    super()
    this.state = {
      src: '',
      isPlaying: false
    }
    this.ctx = null
    this.analyser = null
    this.canvas = createRef()
    this.uploader = createRef()
    this.audioPlayer = createRef()
    this.handleFileUpload = this.handleFileUpload.bind(this)
    this.lineArray = []
  }

  componentDidMount() {
    const canvas = this.canvas.current
    canvas.width = 1000
    canvas.height = 700

    // //temp audio setup *DELETE LATER*
    // const audio = this.audioPlayer.current;
    // const audioContext = new AudioContext();
    // this.analyser = audioContext.createAnalyser();
    // const source = audioContext.createMediaElementSource(audio);
    // source.connect(this.analyser);
    // this.analyser.connect(audioContext.destination);
    // audio.addEventListener('play', this.onPlay);
    // audio.addEventListener('pause', () => {
    //     this.setState({
    //         isPlaying: false
    //     })
    // });
    // // *******************************
  }

  onPlay = () => {
    this.setState(
      {
        isPlaying: true
      },
      this.draw
    )
  }
  setupWebAudio = () => {
    const audio = this.audioPlayer.current

    const audioContext = new AudioContext()
    this.analyser = audioContext.createAnalyser()
    const source = audioContext.createMediaElementSource(audio)
    source.connect(this.analyser)
    this.analyser.connect(audioContext.destination)
    audio.addEventListener('play', this.onPlay)
    audio.addEventListener('pause', () => {
      this.setState({
        isPlaying: false
      })
    })
  }

  interpretAudio = () => {
    // does stuff with audio analyzer
    const audioData = new Uint8Array(this.analyser.frequencyBinCount)
    this.analyser.getByteFrequencyData(audioData)
    const average = audioData.reduce((avg, curr) => avg + curr) / audioData.length
    const max = Math.max(...audioData)
    const stdv = this.standardDeviation(audioData)

    return {
      audioData,
      average,
      stdv,
      max
      // more properties
    }
  }
  standardDeviation = values => {
    var avg = this.average(values)
    var squareDiffs = values.map(function (value) {
      var diff = value - avg
      var sqrDiff = diff * diff
      return sqrDiff
    })

    var avgSquareDiff = this.average(squareDiffs)

    var stdDev = Math.sqrt(avgSquareDiff)
    return stdDev
  }

  average = data => {
    var sum = data.reduce(function (sum, value) {
      return sum + value
    }, 0)

    var avg = sum / data.length
    return avg
  }

  decimal = data => {
    return data - Math.floor(data)
  }

  display = ({ audioData, stdv, average, max }) => {
    const canvas = this.canvas.current
    this.ctx = this.canvas.current.getContext('2d')

    // this.ctx.fillStyle = `rgb(${audioData[0]-128},${audioData[530]-128},${audioData[176]-128})`;

    function Line(x1, y1, x2, y2, dx1, dy1, dx2, dy2, color, ctx) {
      this.x1 = x1
      this.y1 = y1
      this.x2 = x2
      this.y2 = y2
      this.dx1 = dx1
      this.dy1 = dy1
      this.dx2 = dx2
      this.dy2 = dy2
      this.color = color
      this.ctx = ctx

      this.draw = function () {
        this.ctx.beginPath()
        this.ctx.moveTo(this.x1, this.y1)
        this.ctx.lineTo(this.x2, this.y2)
        this.ctx.strokeStyle = this.color
        this.ctx.stroke()
      }

      this.update = function ({ audioData }) {
        let rgb1 = audioData[9]
        let rgb2 = audioData[19]
        let rgb3 = audioData[39]
        this.color = `rgb(${rgb1},${rgb2},${rgb3})`

        if (this.x1 > canvas.width || this.x1 < 0) {
          this.dx1 = -this.dx1
        }
        if (this.x2 > canvas.width || this.x2 < 0) {
          this.dx2 = -this.dx2
        }
        if (this.y1 > canvas.height || this.y1 < 0) {
          this.dy1 = -this.dy1
        }
        if (this.y2 > canvas.height || this.y2 < 0) {
          this.dy2 = -this.dy2
        }

        this.x1 += this.dx1
        this.x2 += this.dx2
        this.y1 += this.dy1
        this.y2 += this.dy2

        this.draw()
        this.ctx.beginPath()
      }
    }

    //lines

    if (audioData[40] > 200) {
      let x1 = canvas.width * 0.5
      let y1 = canvas.height * 0.5
      let x2 = canvas.width * 0.5
      let y2 = canvas.height * 0.5

      let dx1 = (stdv * Math.PI - Math.floor(stdv * Math.PI) - 0.5) * stdv * 10

      let dy1 = (stdv - Math.floor(stdv) - 0.5) * 3

      let dx2 = (stdv * 2.0923789 - Math.floor(stdv * 2.0923789) - 0.5) * 2

      let dy2 = (stdv * 5.9823 - Math.floor(stdv * 5.9823) - 0.5) * stdv * 10

      let color = `rgba(${audioData[19]},${audioData[29]},${audioData[9]}, )`

      this.lineArray.push(new Line(x1, y1, x2, y2, dx1, dy1, dx2, dy2, color, this.ctx))
    }

    if (this.lineArray.length > 3) this.lineArray.shift()


    // square //

    if (stdv > 11 && max > 246) {
      const fakeRandom = this.decimal(this.standardDeviation(audioData))
      this.ctx.fillStyle = `rgba(${audioData[19]},${audioData[29]},${audioData[9]}, .2)`
      this.ctx.fillRect(
        canvas.width * (stdv * Math.PI - Math.floor(stdv * Math.PI)),
        canvas.height * fakeRandom,
        50,
        50
      )

      this.ctx.fillStyle = `rgba(${audioData[19]},${audioData[29]},${audioData[9]}, .2)`
      this.ctx.fillRect(2 * audioData[0] + 300, 2 * audioData[50] + 300, audioData[0] * 2, audioData[2] * 2)
      this.ctx.fillRect(-2 * audioData[100] + 300, -2 * audioData[150] + 300, audioData[0] * 2, audioData[2] * 2)
      this.ctx.fillRect(2 * audioData[200] + 300, -2 * audioData[250] + 300, audioData[0] * 2, audioData[2] * 2)
      this.ctx.fillRect(-2 * audioData[300] + 300, 2 * audioData[350] + 300, audioData[0] * 0.2, audioData[2] * 2)

      this.ctx.fillRect(5 * audioData[400] + 300, 5 * audioData[450] + 300, audioData[0] * 2, audioData[2] * 2)
      this.ctx.fillRect(-5 * audioData[500] + 300, -5 * audioData[550] + 300, audioData[0] * 2, audioData[2] * 2)
      this.ctx.fillRect(5 * audioData[600] + 300, -5 * audioData[650] + 300, audioData[0] * 2, audioData[2] * 2)
      this.ctx.fillRect(-5 * audioData[700] + 300, 5 * audioData[750] + 300, audioData[0] * 2, audioData[2] * 2)
    }
  }

  draw = () => {
    this.ctx = this.canvas.current.getContext('2d')
    if (this.state.isPlaying) {
      requestAnimationFrame(this.draw)

      this.display(this.interpretAudio())

      for (let i = 0; i < this.lineArray.length; i++) {
        this.lineArray[i].update(this.interpretAudio())
      }
    }
  }

  // handle fileupload
  handleFileUpload = e => {
    e.preventDefault()
    this.ctx = this.canvas.current.getContext('2d')
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
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
    return <Provider value={value}>{this.props.children}</Provider>
  }
}

export const withCanvasContext = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>
