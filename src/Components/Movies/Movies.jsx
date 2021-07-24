import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import Movie from './Movie/Movie';
import Empty from '../Messages/Empty';

const Movies = (props) => {
  const { movies } = props;

  return (
    <Row gutter={[16, 16]}>
      {movies?.length ? (
        movies?.map((movie) => (
          <Movie
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            imdbID={movie.imdbID}
            type={movie.Type}
          />
        ))
      ) : (
        <Col span={24}>
          <Empty />
        </Col>
      )}
    </Row>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movies;
