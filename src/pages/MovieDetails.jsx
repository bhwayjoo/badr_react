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
  
  if (!movie) return (
    <div className="text-center text-amber-800 bg-amber-100 p-4 rounded-lg">
      Film non trouvé
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Movie Poster */}
          <div className="w-full md:w-96 flex-shrink-0">
            <div className="relative pt-[150%] md:pt-0 md:h-full">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Movie Details */}
          <div className="p-6 flex-grow">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-amber-900">{movie.title}</h1>
                  <div className="flex items-center bg-amber-100 px-3 py-1 rounded-full">
                    <span className="text-amber-500 mr-1">★</span>
                    <span className="text-amber-900">{movie.vote_average.toFixed(1)}</span>
                  </div>
                </div>

                {movie.tagline && (
                  <p className="text-amber-600 italic mb-4">{movie.tagline}</p>
                )}

                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-amber-900 mb-2">Synopsis</h2>
                    <p className="text-gray-600">{movie.overview}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      {new Date(movie.release_date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⏱️</span>
                      {movie.runtime} minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
