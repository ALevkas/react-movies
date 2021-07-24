import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout } from 'antd';

import Search from '../../Components/Search/Search';
import Movies from '../../Components/Movies/Movies';
import Spinner from '../../Components/Spinner/Spinner';

import styles from './main.module.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = (nameMovie, filter) => {
    setLoading(true);

    if (!API_KEY) return;

    axios
      .get(
        `https://www.omdbapi.com/?s=${nameMovie || 'wars'}&type=${filter || ''}&apikey=${API_KEY}`,
      )
      .then((res) => {
        const loadingMovies = res.data.Search;
        setMovies(loadingMovies);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Layout.Content className={styles.container}>
      <Search getMovies={getMovies} />
      {loading ? <Spinner /> : <Movies movies={movies} />}
    </Layout.Content>
  );
};
export default Main;
