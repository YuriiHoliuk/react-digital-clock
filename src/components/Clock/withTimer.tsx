import React from 'react';

export interface ITimerState {
  date: Date;
}

export function withTimer(WrappedComponent: any): any {
  return class extends React.Component<{}, ITimerState> {

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
      return <WrappedComponent date={this.state.date} />;
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
  };
}
