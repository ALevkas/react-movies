/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Layout, BackTop, Typography } from 'antd';

import setMovies from '../../redux/actions/movies';

import MovieService from '../../API/Movie.Service';
import useFetching from '../../Hooks/useFetching';

import Search from '../../Components/Search/Search';
import Movies from '../../Components/Movies/Movies';
import Spinner from '../../Components/Spinner/Spinner';

import styles from './home.module.scss';

const Main = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ movies }) => ({
    items: movies.items,
  }));

  const [url, setUrl] = useState(MovieService.getUrlMovies());
  const { data, isLoading, error } = useFetching(url);

  const getMovies = async (nameMovie, filter) => {
    setUrl(MovieService.getUrlMovies(nameMovie, filter));
  };

  useEffect(() => {
    if (data) {
      dispatch(setMovies(data.Search));
    }
  }, [data]);

  return (
    <Layout.Content className={styles.container}>
      <Search getMovies={getMovies} />

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Typography.Title level={2} type="danger">
          {`Attetion: ${error}`}
        </Typography.Title>
      ) : (
        <Movies movies={items} />
      )}
      <BackTop />
    </Layout.Content>
  );
};

export default Main;
