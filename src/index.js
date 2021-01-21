import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GlobalProvider } from './providers/GlobalContext'
import App from './App';


const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router history={history}>
       <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

