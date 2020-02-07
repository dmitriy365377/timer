import React from "react";
import { Interval } from "./interval.component";
import { connect } from "../store+connect+provider";

class TimerComponent extends React.Component {
  state = {
    currentTime: 0,
    timeToStart: false // состояние для кнопок
  };

  increment(interval) {
    this.sec = setInterval(() => {
      this.setState({ currentTime: this.state.currentTime + interval });
    }, 1000 * this.props.currentInterval);
  }

  // обновляем состояние timeToStart
  // и вызываем increment и прокидываем interval(this.props.currentInterval)
  handleStart = () => {
    this.setState(
      state => ({ ...state, timeToStart: !state.timeToStart }),
      () => this.increment(this.props.currentInterval)
    );
  };

  // очистка таймаута
  componentWillUnmount() {
    clearInterval(this.sec);
  }

  // остановка таймера
  // меняет состояние timeToStart и currenTime
  handleStop = () => {
    clearInterval(this.sec);
    this.setState({ timeToStart: false, currentTime: 0 });
  };

  render() {
    return (
      <div>
        <Interval />
        <div>Секундомер: {this.state.currentTime} сек.</div>
        <div>
          <button disabled={this.state.timeToStart} onClick={this.handleStart}>
            Старт
          </button>
          <button disabled={!this.state.timeToStart} onClick={this.handleStop}>
            Стоп
          </button>
        </div>
      </div>
    );
  }
}

export const Timer = connect(
  state => ({
    currentInterval: state
  }),
  () => {}
)(TimerComponent);
