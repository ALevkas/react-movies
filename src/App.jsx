import React from 'react';
import { Layout, Divider } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Header from './Layout/Header/Header';
import Main from './Pages/Main/Main';
import Favourites from './Pages/Favourites/Favourites';
import Menu from './Components/Menu/Menu';

import 'antd/dist/antd.css';
import styles from './app.module.scss';

const App = () => (
  <Router>
    <Provider store={store}>
      <Layout>
        <Header />
        <Layout className={styles.mainLayout}>
          <Menu />
          <Divider />
          <Switch>
            <Route path="/favourites" exact>
              <Favourites />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Layout>
      </Layout>
    </Provider>
  </Router>
);

export default App;
