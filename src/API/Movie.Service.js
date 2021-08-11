const API_KEY = process.env.REACT_APP_API_KEY;

class MovieService {
  static getUrlMovies(nameMovie, filter = '') {
    if (!API_KEY) return null;

    return `https://www.omdbapi.com/?s=${nameMovie || 'wars'}&type=${
      filter || ''
    }&apikey=${API_KEY}`;
  }
}

export default MovieService;
