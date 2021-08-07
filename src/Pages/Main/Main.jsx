import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Layout, BackTop } from 'antd';

import { setMovies, setLoaded } from '../../redux/actions/movies';

import Search from '../../Components/Search/Search';
import Movies from '../../Components/Movies/Movies';
import Spinner from '../../Components/Spinner/Spinner';

import styles from './main.module.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ movies }) => ({
    items: movies.items,
    isLoaded: movies.isLoaded,
  }));

  const getMovies = (nameMovie, filter = '') => {
    if (!API_KEY) return;

    dispatch(setLoaded(false));

    axios
      .get(
        `https://www.omdbapi.com/?s=${nameMovie || 'wars'}&type=${filter || ''}&apikey=${API_KEY}`,
      )
      .then((res) => {
        const loadingMovies = res.data.Search;
        dispatch(setMovies(loadingMovies));
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Layout.Content className={styles.container}>
      <Search getMovies={getMovies} />

      {isLoaded ? <Movies movies={items} /> : <Spinner />}
      <BackTop />
    </Layout.Content>
  );
};

export default Main;
