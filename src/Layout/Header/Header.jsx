import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';

import styles from './header.module.scss';

const Header = () => (
  <Layout.Header>
    <Typography.Title className={styles.title}>
      <Link to="/">React Movies</Link>
    </Typography.Title>
  </Layout.Header>
);

export default Header;
