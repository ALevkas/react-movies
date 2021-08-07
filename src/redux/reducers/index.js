import { combineReducers } from 'redux';

import favouritesReducer from './favourites';
import moviesReducer from './movies';

const rootReducer = combineReducers({ favourites: favouritesReducer, movies: moviesReducer });

export default rootReducer;
