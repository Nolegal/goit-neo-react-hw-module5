import  fetchMovies  from '../../api/api';
import { useState, useEffect } from 'react';

import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) =>setMovies(data.results))

    console.log(movies)
  }, [movies]);
   
  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;