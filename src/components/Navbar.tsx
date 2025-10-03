import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-red-600 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-white">
              <div className="text-4xl font-bold tracking-tight">IELTS</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button className="text-white hover:text-gray-200 transition-colors duration-200 font-medium flex items-center space-x-1">
              <span>Test Takers</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="text-white hover:text-gray-200 transition-colors duration-200 font-medium flex items-center space-x-1">
              <span>Organisations</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="text-white hover:text-gray-200 transition-colors duration-200 font-medium flex items-center space-x-1">
              <span>Researchers</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 font-medium">
              News and Insights
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-white hover:text-gray-200 transition-colors duration-200 p-2">
              <Search className="h-6 w-6" />
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
              <span>Book a test</span>
              <span className="text-xl">→</span>
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-red-600 border-t border-red-700">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#" className="block py-3 text-white hover:text-gray-200 transition-colors duration-200 font-medium border-b border-red-700">
              Test Takers
            </a>
            <a href="#" className="block py-3 text-white hover:text-gray-200 transition-colors duration-200 font-medium border-b border-red-700">
              Organisations
            </a>
            <a href="#" className="block py-3 text-white hover:text-gray-200 transition-colors duration-200 font-medium border-b border-red-700">
              Researchers
            </a>
            <a href="#" className="block py-3 text-white hover:text-gray-200 transition-colors duration-200 font-medium border-b border-red-700">
              News and Insights
            </a>
            <button className="w-full bg-white text-gray-900 px-6 py-3 font-bold hover:bg-gray-100 transition-colors duration-200 mt-2">
              Book a test →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
