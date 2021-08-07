import { message } from 'antd';

const initalFavouritesState = {
  favourites: [],
};

const favourites = (state = initalFavouritesState, action) => {
  if (action.type === 'ADD_FAVOURITE') {
    const isAdded = state.favourites.find(
      (favourite) => favourite.imdbID === action.payload.imdbID,
    );

    if (isAdded) {
      message.error(`${action.payload.Title} has already been added`);
      return state;
    }

    message.success(`${action.payload.Title} added to favourites films`);

    return {
      ...state,
      favourites: [...state.favourites, action.payload],
    };
  }

  if (action.type === 'REMOVE_FAVOURITE') {
    return {
      ...state,
      favourites: state.favourites.filter((favourite) => favourite.imdbID !== action.payload),
    };
  }

  return state;
};

export default favourites;
