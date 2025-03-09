import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/api';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const defaultImg =
    "https://sm.ign.com/t/ign_in/screenshot/default/msmr-pc-hero_4kjg.1280.jpg";

  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then((data) => setMovieCredits(data));
  }, [movieId]);

  return (
    <ul>
      {movieCredits && movieCredits.cast.length > 0 ? (
        movieCredits.cast.map(({ id, name, character, profile_path }) => (
          <li className={css["cast-member-card"]} key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              alt={name}
              width={100}
            />
            <div>
              <p>
                <strong>Actor: </strong>
                {name}
              </p>
              <p>
                <strong>Character: </strong>
                {character}
              </p>
            </div>
          </li>
        ))
      ) : (
        <p>No cast info for this movie.</p>
      )}
    </ul>
  );
};

export default MovieCast;