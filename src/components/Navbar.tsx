import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/features', label: 'Features' },
    { path: '/for-employers', label: 'For Employers' },
    { path: '/for-candidates', label: 'For Candidates' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-red-800" />
            <span className="font-bold text-xl text-gray-900" style={{ fontFamily: 'Poppins' }}>
              VetriaAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-red-800 border-b-2 border-red-800'
                    : 'text-gray-600 hover:text-red-800'
                }`}
                style={{ fontFamily: 'Inter' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-900 transition-colors duration-200"
              style={{ fontFamily: 'Inter' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-red-800 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-red-800 bg-red-50'
                      : 'text-gray-600 hover:text-red-800 hover:bg-red-50'
                  }`}
                  style={{ fontFamily: 'Inter' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors duration-200"
                style={{ fontFamily: 'Inter' }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;