import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Main from './Layout/Main/Main';

import 'antd/dist/antd.css';

const App = () => (
  <Router>
    <Provider store={store}>
      <Main />
    </Provider>
  </Router>
);

export default App;
