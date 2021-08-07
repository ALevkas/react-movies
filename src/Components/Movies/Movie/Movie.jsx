import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Image, Typography, Skeleton, message,
} from 'antd';
import {
  PlayCircleOutlined,
  QuestionCircleOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setAddFavourite, setRemoveFavourite } from '../../../redux/actions/favourites';

import styled from './movie.module.scss';

const Movie = ({
  title, year, poster, imdbID, type,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const onPlay = () => {
    window.open(`https://www.kinopoisk.ru/index.php?kp_query=${title}`);
  };

  const onAddFavourite = () => {
    dispatch(
      setAddFavourite({
        Title: title,
        Year: year,
        Poster: poster,
        imdbID,
        Type: type,
      }),
    );
  };

  const onRemovedFavourite = () => {
    dispatch(setRemoveFavourite(imdbID));

    message.success(`${title} removed from favourites films`);
  };

  return (
    <Col xs={24} sm={12} lg={8} xl={6}>
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
            : [
              <PlayCircleOutlined key="play" onClick={onPlay} title="Find at kinopoisk" />,
              location.pathname !== '/favourites' ? (
                <PlusCircleOutlined
                  key="add"
                  onClick={onAddFavourite}
                  title="Add to favourites"
                />
              ) : (
                <MinusCircleOutlined
                  key="add"
                  onClick={onRemovedFavourite}
                  title="Remove from favourites"
                />
              ),
            ]
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
