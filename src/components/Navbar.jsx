import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
            <span className="text-3xl">🎬</span>
            <span className="text-white">MovieManager</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-amber-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-amber-100 transition-colors font-medium flex items-center space-x-1">
              <span>🏠</span>
              <span>Accueil</span>
            </Link>
            <Link to="/recherche" className="hover:text-amber-100 transition-colors font-medium flex items-center space-x-1">
              <span>🔍</span>
              <span>Recherche</span>
            </Link>
            <Link to="/ajouter" className="hover:text-amber-100 transition-colors font-medium flex items-center space-x-1">
              <span>➕</span>
              <span>Ajouter un film</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="hover:bg-amber-600 px-3 py-2 rounded-md transition-colors font-medium flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>🏠</span>
              <span>Accueil</span>
            </Link>
            <Link
              to="/recherche"
              className="hover:bg-amber-600 px-3 py-2 rounded-md transition-colors font-medium flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>🔍</span>
              <span>Recherche</span>
            </Link>
            <Link
              to="/ajouter"
              className="hover:bg-amber-600 px-3 py-2 rounded-md transition-colors font-medium flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>➕</span>
              <span>Ajouter un film</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
