export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  payload: movies,
});

export const setLoaded = (isLoaded) => ({
  type: 'SET_LOADED',
  payload: isLoaded,
});
