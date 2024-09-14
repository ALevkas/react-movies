import React from 'react';
import { Layout, Divider } from 'antd';

import Header from '../Header/Header';
import Menu from '../../Components/Menu/Menu';
import AppRouter from '../../Components/AppRouter/AppRouter';

import styles from './main.module.scss';

const Main = () => (
  <Layout>
    <Header />
    <Layout className={styles.mainLayout}>
      <Menu />
      <Divider />
      <AppRouter />
    </Layout>
  </Layout>
);

export default Main;
