import React from 'react';

import { Clock } from './Clock';
import { withTimer } from './withTimer';

export const ClockWithTimer: React.SFC<{}> = withTimer(Clock);
