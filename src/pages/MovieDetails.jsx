import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des détails du film');
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="text-center">Chargement...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!movie) return <div className="text-center">Film non trouvé</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-96 w-full object-cover md:w-96"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
              {movie.release_date && new Date(movie.release_date).getFullYear()}
            </div>
            <h1 className="mt-1 text-3xl font-bold">{movie.title}</h1>
            <p className="mt-2 text-gray-500">{movie.tagline}</p>
            
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
              <p className="text-gray-600">{movie.overview}</p>
            </div>

            <div className="mt-6 flex items-center">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{movie.vote_average.toFixed(1)}</span>
                <span className="text-gray-400 ml-1">/ 10</span>
              </div>
              <span className="mx-2">•</span>
              <span>{movie.runtime} minutes</span>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
