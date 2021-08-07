import { message } from 'antd';

const getInitialArray = () => {
  const favourites = window.localStorage.getItem('favourites');

  return JSON.parse(favourites) || [];
};

const setFavouritesInLocal = (favourites) => {
  window.localStorage.setItem('favourites', JSON.stringify(favourites));
};

const initalFavouritesState = {
  favourites: getInitialArray(),
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

    const updateFavourites = [...state.favourites, action.payload];
    setFavouritesInLocal(updateFavourites);

    return {
      ...state,
      favourites: updateFavourites,
    };
  }

  if (action.type === 'REMOVE_FAVOURITE') {
    const updateFavourites = state.favourites.filter(
      (favourite) => favourite.imdbID !== action.payload,
    );

    setFavouritesInLocal(updateFavourites);

    return {
      ...state,
      favourites: updateFavourites,
    };
  }

  return state;
};

export default favourites;
