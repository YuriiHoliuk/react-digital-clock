import React from 'react';

import * as styles from './clock.scss';

export function Clock(props) {
  return <span className={styles.clock}>{props.date.toLocaleTimeString()}</span>
}
