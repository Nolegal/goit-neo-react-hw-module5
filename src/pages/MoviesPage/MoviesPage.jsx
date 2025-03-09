import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery  } from '../../api/api';
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [movies, setMovies] = useState([]);
  
  const handleSearch=(query)=> {
    setSearchParams({ query });
  }

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) {
      return;
    }

    fetchMovieByQuery(query).then((data) => {
      setMoviesNotFound(false);

      if (data.results.length != 0) {
        setMovies(data.results);
      } else {
        setMoviesNotFound(true);
      }
    });
  }, [searchParams]);

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} moviesNotFound={moviesNotFound} />
    </div>
  );
};

export default MoviesPage;