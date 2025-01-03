import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
            <span className="text-3xl">🎬</span>
            <span className="text-white">MovieManager</span>
          </Link>
          <div className="flex space-x-6">
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
      </div>
    </nav>
  );
}

export default Navbar;
