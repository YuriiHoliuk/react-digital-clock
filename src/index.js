import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './Timer/Timer.jsx';

import './index.scss';

const App = () => <Timer />;

ReactDOM.render(<App/>, document.getElementById('app'));
