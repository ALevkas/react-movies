import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styles from './header.module.scss';

const Header = () => (
  <Layout.Header>
    <nav className={styles.nav}>
      <Typography.Title className={styles.title}>
        <Link to="/">React Movies</Link>
      </Typography.Title>
      <a
        href="https://github.com/ALevkas"
        target="_blank"
        rel="noreferrer"
        title="go to github alevkas page"
      >
        <GithubOutlined style={{ fontSize: '32px', color: '#fff' }} />
      </a>
    </nav>
  </Layout.Header>
);

export default Header;
