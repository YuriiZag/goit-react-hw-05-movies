import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'utils/box';
import fetchApi from 'utils/API';
import { BsArrowLeft } from 'react-icons/bs';
import { BackLink, FilmInfo, InfoItem, InfoLabel } from './movieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const searchQuote = `movie/${movieId}`;

  useEffect(() => {
    fetchApi(searchQuote).then(({ data }) => setMovie(data));
  }, [searchQuote]);
  const { title, genres, poster_path, overview, vote_average } = movie;

  const genresListParse = () => {
    if (genres !== undefined) {
      const genresList = genres.map(genre => genre.name).join(' ');
      return genresList;
    }
  };

  return (
    <Box as="section" pt="40px" display="flex" flexDirection="column">
      <BackLink to={backLinkHref}>
        <BsArrowLeft />
        Go back
      </BackLink>
      <Box display="flex" pb="10px">
        <img
          src={
            poster_path !== undefined
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://cdn.pixabay.com/photo/2012/04/12/13/21/film-30008_960_720.png'
          }
          alt={title}
          width="300"
        />
        <Box ml="24px">
          <h1>{title}</h1>
          <FilmInfo>
            <InfoItem>User Score: {vote_average * 10}%</InfoItem>
            <InfoItem>
              <InfoLabel>Overview</InfoLabel> <span>{overview}</span>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Genres</InfoLabel> <span>{genresListParse()}</span>
            </InfoItem>
          </FilmInfo>
        </Box>
      </Box>
      <Box borderTop="1px solid black" borderBottom="1px solid black">
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Movie cast</Link>
          </li>
          <li>
            <Link to="reviews">Movie reviews</Link>
          </li>
        </ul>
        
      </Box>
      <Outlet />
    </Box>

  );
};

export default MovieDetails;
