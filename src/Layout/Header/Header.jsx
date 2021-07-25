import React from 'react';
import {
  Layout, Typography, Row, Col,
} from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import styles from './header.module.scss';

const Header = () => (
  <Layout.Header>
    <Row gutter={[16, 16]} className={styles.nav} align="center" justify="space-between">
      <Col span={22}>
        <Typography.Title className={styles.title}>
          <a href="https://allevchenko.ru/react-movies">React Movies</a>
        </Typography.Title>
      </Col>
      <Col span={2}>
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
