import { useState, useEffect, useRef } from 'react';
import {
  useParams,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchMovieById } from '../../api/api';
import css from './MovieDetailsPage.module.css';
// import { FaArrowLeft } from "react-icons/fa";



const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");

  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);

 

  return (
    <div className="container">
      
    <Link className={"go-back-link"} to={goBackLink.current}>
       {/*  <FaArrowLeft/>  */} Go back
    </Link>
    <MovieCard movie={movie} />
    <hr />
    <div className={css["additional-info"]}>
      <h3 className="heading">Additional Information:</h3>
      <ul className={css["additional-info-list"]}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
    <hr />
    <Outlet />
    </div>
  );
};

export default MovieDetailsPage;