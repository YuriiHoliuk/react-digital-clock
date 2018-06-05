import React from 'react';

import * as styles from './clock.scss';

export interface IClockProps {
  date: Date;
}

export const Clock: React.SFC<IClockProps> = ({ date }) => (
  <span className={styles.clock}>{date.toLocaleTimeString()}</span>
);
