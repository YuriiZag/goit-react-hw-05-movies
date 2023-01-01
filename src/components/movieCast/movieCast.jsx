import { useParams } from 'react-router-dom';
import { Box } from 'utils/box';
import { useEffect, useState } from 'react';
import fetchApi from 'utils/API';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const searchQuote = `movie/${movieId}/credits`;
  const [status, setStatus] = useState('idle');


  useEffect(() => {
    fetchApi(searchQuote)
      .then(({ data }) => setMovieCast(data.cast))
      .catch(error => setStatus('rejected'));
  }, [searchQuote]);

  console.log(movieCast);

  if (status === 'rejected' || movieCast.length === 0) {
    return <p>No actors list found</p>;
  } else {
    return (
      <Box>
        <ul>
          {movieCast.map(
            ({ profile_path, original_name, character, cast_id }) => {
              return (
                <li key={cast_id}>
                  <img
                    src={
                      profile_path !== null
                        ? `https://image.tmdb.org/t/p/w300${profile_path}`
                        : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                    }
                    alt={original_name}
                    width="150"
                  />
                  <p>{original_name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            }
          )}
        </ul>
      </Box>
    );
  }
};

export default MovieCast