import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header/Header';
import Main from './Layout/Main/Main';

import 'antd/dist/antd.css';
import styles from './app.module.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Header />
      <Layout className={styles.mainLayout}>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Layout>
    </Layout>
  </BrowserRouter>
);

export default App;
