import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Image, Typography, Skeleton,
} from 'antd';
import { PlayCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import styled from './movie.module.scss';

const Movie = ({
  title, year, poster, imdbID, type,
}) => {
  const onPlay = () => {
    window.open(`https://www.kinopoisk.ru/index.php?kp_query=${title}`);
  };

  return (
    <Col xs={{ span: 24 }} lg={{ span: 6 }}>
      <Card
        id={imdbID}
        cover={
          poster === 'N/A' ? (
            <Skeleton.Image style={{ height: '450px', width: '300px' }} />
          ) : (
            <Image alt="poster" src={poster} style={{ height: '450px' }} />
          )
        }
        actions={
          type === 'game'
            ? [<QuestionCircleOutlined key="question" title="It's game" />]
            : [<PlayCircleOutlined key="play" onClick={onPlay} title="Find at kinopoisk" />]
        }
      >
        <div className={styled.meta}>
          <div>
            <Typography.Title level={5}>{title}</Typography.Title>
          </div>
          <div className={styled.description}>
            <Typography.Text type="secondary">{year}</Typography.Text>

            <Typography.Text type="secondary">{type}</Typography.Text>
          </div>
        </div>
      </Card>
    </Col>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Movie;
