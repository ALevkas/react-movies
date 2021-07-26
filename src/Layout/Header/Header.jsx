import React from 'react';
import {
  Layout, Typography, Row, Col,
} from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import styles from './header.module.scss';

const Header = () => (
  <Layout.Header className={styles.header}>
    <Row gutter={[16, 16]} align="center" justify="space-between">
      <Col xs={24} sm={12} className={styles.logo}>
        <Typography.Title className={styles.title}>
          <a href="https://allevchenko.ru/react-movies">React Movies</a>
        </Typography.Title>
      </Col>
      <Col xs={24} sm={12} className={styles.social}>
        <a
          href="https://github.com/ALevkas"
          target="_blank"
          rel="noreferrer"
          title="go to github alevkas page"
        >
          <GithubOutlined className={styles.github} />
        </a>
      </Col>
    </Row>
  </Layout.Header>
);

export default Header;
