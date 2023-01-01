import { useParams } from 'react-router-dom';
import { Box } from 'utils/box';
import fetchApi from 'utils/API';
import { useState, useEffect } from 'react';
import { AuthorLabel } from './movieReview.styled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);

  const searchQuote = `movie/${movieId}/reviews`;

  useEffect(() => {
    fetchApi(searchQuote).then(({ data }) => setReview(data.results)).catch(erorr => erorr)
  }, [searchQuote]);
  return (
    <Box>
      <ul>
        {reviews.map(({ content, author }) => {
          return (
            <li key={author}>
              <AuthorLabel>Author: {author}</AuthorLabel>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default MovieReviews