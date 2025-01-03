import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../services/api';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await searchMovies(query);
      setMovies(response.data.results);
    } catch (err) {
      setError('Erreur lors de la recherche');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-6">
      <h1 className="page-title">Rechercher des Films</h1>
      
      <form onSubmit={handleSearch} className="mb-8 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un film..."
            className="flex-1 p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white shadow-sm text-lg"
          />
          <button
            type="submit"
            className="btn-primary py-3 px-8 text-lg font-medium shadow-sm"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                Recherche...
              </div>
            ) : (
              <>
                <span className="hidden sm:inline">Rechercher</span>
                <span className="sm:hidden">🔍</span>
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="text-red-500 bg-red-100 p-4 rounded-lg mb-6 text-center">
          {error}
        </div>
      )}

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
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-amber-900">{movie.title}</h2>
              <div className="flex justify-between items-center text-sm">
                <p className="text-amber-700">
                  {movie.release_date && new Date(movie.release_date).getFullYear()}
                </p>
                <div className="flex items-center">
                  <span className="text-amber-500 mr-1">★</span>
                  <span className="text-amber-700">{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {movies.length === 0 && !loading && query && (
        <div className="text-center text-gray-500 mt-8">
          Aucun film trouvé pour "{query}"
        </div>
      )}
    </div>
  );
}

export default Search;
