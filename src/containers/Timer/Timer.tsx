import React from 'react';

import { Clock } from '../../components/Clock/Clock';

import * as styles from './timer.scss';

export class Timer extends React.Component {

  state = {
    date: new Date(),
  };

  private intervalId: number;

  componentDidMount() {
    // TODO: How to use types from window?
    this.intervalId = (setInterval as (fn: () => any, interval: number) => number)(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Clock date={this.state.date} />
      </div>
    );
  }

  private tick = () => {
    this.setState({
      date: new Date(),
    });
  }
}
