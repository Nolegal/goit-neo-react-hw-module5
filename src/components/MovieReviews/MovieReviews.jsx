import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../api/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      const data = await fetchMovies(`movie/${movieId}/reviews`);
      setReviews(data);
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <strong>Author: {review.author}</strong>
              <p dangerouslySetInnerHTML={{ __html: review.content }}></p>
            </li>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;