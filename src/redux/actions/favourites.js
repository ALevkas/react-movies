export const setAddFavourite = (favourite) => ({
  type: 'ADD_FAVOURITE',
  payload: favourite,
});

export const setRemoveFavourite = (favourite) => ({
  type: 'REMOVE_FAVOURITE',
  payload: favourite,
});
