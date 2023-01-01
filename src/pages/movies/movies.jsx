import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import fetchApi from 'utils/API';
import { Box } from 'utils/box';
import { FilmLinks, FilmList, Form, InputField, SubmitButton } from './movies.styled';

const Movies = () => {
  const [queryName, setQuerryName] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const quoteFilmName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const filmName = searchParams.get('query') ?? '';
    console.log(filmName);
    if (filmName !== '' || filmName === undefined) {
      const serchQuote = 'search/movie';
      const searchQuery = `&query=${filmName.trim()}`;
      fetchApi(serchQuote, searchQuery)
        .then(({ data }) => setSearchedMovies(data.results))
        .catch(erorr => erorr);
    }
  }, [searchParams]);

  const onFormSubmit = async e => {
    e.preventDefault();
    updateQueryString(queryName);
    const serchQuote = 'search/movie';
    const searchQuery = `&query=${queryName.trim()}`;
    fetchApi(serchQuote, searchQuery)
      .then(({ data }) => setSearchedMovies(data.results))
      .catch(erorr => erorr);
    setQuerryName('');
  };

  const onInputChange = e => {
    setQuerryName(e.currentTarget.value);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  return (
    <Box as="section" pt="30px">
      <Form onSubmit={onFormSubmit}>
        <label htmlFor="movie-name">
          <InputField
            type="text"
            name="movie-name"
            onChange={onInputChange}
            value={queryName}
          />
        </label>
        <SubmitButton type="submit">search</SubmitButton>
      </Form>
      {quoteFilmName !== '' ? (
        <FilmList>
          {searchedMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <FilmLinks to={`${id}`} state={{ from: location }}>
                  {title}
                </FilmLinks>
              </li>
            );
          })}
        </FilmList>
      ) : (
        <p>input to search</p>
      )}
    </Box>
  );
};

export default Movies