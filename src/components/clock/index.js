// ==========================================================================
// WallClock
// ==========================================================================
import React, { Component } from 'react';

// presentation
import ClockLayout from './layout';

class WallClock extends Component {

  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    };
  }

  componentDidMount() {
      let date = new Date();

      let seconds = date.getSeconds() / 60 * 360;
      let minutes = date.getMinutes() / 60 * 360 + date.getSeconds() / 60 * 6;
      let hours = date.getHours() / 12 * 360 + date.getMinutes() / 60 * 30;

      this.setState({
        seconds: seconds,
        minutes: minutes,
        hours: hours
      });
  }

  render() {
    const { seconds, minutes, hours } = this.state;
    return <ClockLayout seconds={seconds} minutes={minutes} hours={hours} />;
  }

}

export default WallClock;
