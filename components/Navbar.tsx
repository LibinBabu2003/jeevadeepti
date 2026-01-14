import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-brand-600 fill-brand-600 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-none">Jeevadeepti</span>
                <span className="text-xs text-brand-600 font-semibold tracking-wide">Yuvadeepti SMYM</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'text-brand-600 bg-brand-50' : 'text-gray-600 hover:text-brand-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/directory" 
              className={`hidden md:block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/directory') ? 'text-brand-600 bg-brand-50' : 'text-gray-600 hover:text-brand-600'}`}
            >
              Directory
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
