import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ReduxState from './stores';
import history from "./history";

import WebSocket from "./configuration/websocket";

ReactDOM.render(
  <React.StrictMode>
    <ReduxState>
      <WebSocket>
        <Router history={history}>
            <App />
        </Router>
      </WebSocket>
    </ReduxState>
  </React.StrictMode>,
  document.getElementById('root')
);