import React from 'react';

import * as styles from './timer.scss';

import { Clock } from '../Clock/Clock';

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Clock date={this.state.date} />
      </div>
    );
  }
}
