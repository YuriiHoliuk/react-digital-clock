import React from 'react';

import * as styles from './clock.scss';

export interface IClockProps {
  date: Date;
}

export const Clock: React.SFC<IClockProps> = ({ date }) => (
  <div className={styles.wrapper}>
    <span className={styles.clock}>{date.toLocaleTimeString()}</span>
  </div>
);
