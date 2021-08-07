const initalMoviesState = {
  items: [],
  isLoaded: false,
};

const movies = (state = initalMoviesState, action) => {
  if (action.type === 'SET_MOVIES') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }

  if (action.type === 'SET_LOADED') {
    return {
      ...state,
      isLoaded: action.payload,
    };
  }

  return state;
};

export default movies;
