const initalMoviesState = {
  items: [],
};

const movies = (state = initalMoviesState, action) => {
  if (action.type === 'SET_MOVIES') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }

  return state;
};

export default movies;
