import React from 'react';
import { Layout, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import styles from './header.module.scss';

const Header = () => (
  <Layout.Header className={styles.header}>
    <div className={styles.wrapper}>
      <div>
        <Typography.Title className={styles.title}>
          <a href="https://allevchenko.ru/react-movies">React Movies</a>
        </Typography.Title>
      </div>
      <div span={2}>
        <a
          href="https://github.com/ALevkas"
          target="_blank"
          rel="noreferrer"
          title="go to github alevkas page"
        >
          <GithubOutlined className={styles.github} />
        </a>
      </div>
    </div>
  </Layout.Header>
);

export default Header;
