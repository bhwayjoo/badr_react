import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../services/api';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getPopularMovies();
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des films');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">
      {error}
    </div>
  );

  return (
    <div>
      <h1 className="page-title">Films Populaires</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/film/${movie.id}`}
            className="card group"
          >
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm line-clamp-3">{movie.overview}</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold mb-2 text-amber-900">{movie.title}</h2>
              <div className="flex justify-between items-center">
                <p className="text-amber-700">
                  {new Date(movie.release_date).getFullYear()}
                </p>
                <div className="flex items-center space-x-1">
                  <span className="text-amber-500">★</span>
                  <span className="text-amber-700">{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
