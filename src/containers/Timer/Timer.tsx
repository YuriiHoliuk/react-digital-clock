import React from 'react';

import { Clock } from '../../components/Clock/Clock';

import * as styles from './timer.scss';

export interface ITimerState {
  date: Date;
}

export class Timer extends React.Component<{}, ITimerState> {

  state = {
    date: new Date(),
  };

  private timerId: number;
  private lastTimeStamp = 0;

  componentDidMount() {
    this.timerId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.timerId);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Clock date={this.state.date} />
      </div>
    );
  }

  private tick = () => {
    const date = new Date();
    const timestamp = date.getTime();

    if (timestamp - this.lastTimeStamp >= 1000) {
      this.setState({ date });
      this.lastTimeStamp = timestamp;
    }

    this.timerId = requestAnimationFrame(this.tick);
  }
}
