// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {secs: '00', isStop: true, mins: '00'}

  onClickStart = () => {
    this.timerID = setInterval(this.tick, 1000)
    this.setState(PrevState => ({isStop: !PrevState.isStop}))
  }

  onClickStop = () => {
    this.setState(PrevState => ({isStop: !PrevState.isStop}))

    const {isStop} = this.state
    if (!isStop) {
      clearInterval(this.timerID)
    } else {
      this.onClickStart()
    }
  }

  onClickReset = () => {
    this.setState({secs: '00'})
    this.setState({mins: '00'})
    clearInterval(this.timerID)
  }

  tick = () => {
    const {secs} = this.state
    this.setState(PrevState => ({secs: +PrevState.secs + 1}))

    if (secs === 60) {
      this.setState({secs: 0})
      this.setState(PrevState => ({mins: +PrevState.mins + 1}))
    }
  }

  render() {
    const {secs, mins} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Stopwatch</h1>
          <div className="time-cont">
            <div className="time">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p className="t">Timer</p>
            </div>
            <h1 className="timer">
              {mins}:{secs}
            </h1>
            <div className="btn-cont">
              <button
                type="button"
                onClick={this.onClickStart}
                className="start"
              >
                Start
              </button>
              <button type="button" onClick={this.onClickStop} className="stop">
                Stop
              </button>
              <button
                type="button"
                onClick={this.onClickReset}
                className="reset"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="last"> </div>
      </div>
    )
  }
}

export default Stopwatch
