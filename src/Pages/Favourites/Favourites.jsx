import React from 'react';
import { Layout, BackTop } from 'antd';

import { useSelector } from 'react-redux';

import Movies from '../../Components/Movies/Movies';

import styles from './favourites.module.scss';

const Favourites = () => {
  const { items } = useSelector(({ favourites }) => ({
    items: favourites.favourites,
  }));

  return (
    <Layout.Content className={styles.container}>
      <Movies movies={items} />
      <BackTop />
    </Layout.Content>
  );
};

export default Favourites;
