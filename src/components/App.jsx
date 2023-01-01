import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/sharedLayout';
import MovieCast from './movieCast/movieCast';
import MovieDetails from 'pages/movieDetails/movieDetails';

const HomePage = lazy(() => import('../pages/Homepage/home'));
const Movies = lazy(() => import('../pages/movies/movies'));
const MovieReviews = lazy(() => import('../components/movieReviews/movieReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout></SharedLayout>}>
        <Route index element={<HomePage></HomePage>} />
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails></MovieDetails>}>
          <Route path="cast" element={<MovieCast></MovieCast>} />
          <Route path="reviews" element={<MovieReviews></MovieReviews>} />
        </Route>
      </Route>
    </Routes>
  );
};
