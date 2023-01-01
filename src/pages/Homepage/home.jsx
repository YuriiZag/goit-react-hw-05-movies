import { useLocation } from 'react-router-dom';
import { Box } from 'utils/box';
import fetchApi from '../../utils/API';
import { useState, useEffect } from 'react';
import { FilmLinks, FilmList, Header } from './home.styled';

const SEARCH_QUERY = 'trending/movie/day';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchApi(SEARCH_QUERY)
      .then(({ data }) => setTrendingFilms(data.results))
      .catch(error => error);
  }, []);

  return (
    <Box as="section" pt="30px">
      <Header>Tending movies</Header>
      <FilmList>
        {trendingFilms.map(({ title, id }) => {
          return (
            <li key={id}>
              <FilmLinks to={`movies/${id}`} state={{ from: location }}>
                {title}
              </FilmLinks>
            </li>
          );
        })}
      </FilmList>
    </Box>
  );
};

export default HomePage;
