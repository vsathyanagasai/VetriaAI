import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-red-400" />
              <span className="font-bold text-xl" style={{ fontFamily: 'Poppins' }}>
                VetriaAI
              </span>
            </div>
            <p className="text-gray-400 mb-4" style={{ fontFamily: 'Inter' }}>
              AI-powered hiring solutions that revolutionize recruitment. 
              Connect top talent with employers through intelligent automation.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span style={{ fontFamily: 'Inter' }}>sathya.vetriaai@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span style={{ fontFamily: 'Inter' }}>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Poppins' }}>
              Product
            </h3>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'Inter' }}>
              <li>
                <Link to="/features" className="hover:text-red-400 transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-red-400 transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/for-employers" className="hover:text-red-400 transition-colors duration-200">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/for-candidates" className="hover:text-red-400 transition-colors duration-200">
                  For Candidates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Poppins' }}>
              Company
            </h3>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'Inter' }}>
              <li>
                <Link to="/about" className="hover:text-red-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p style={{ fontFamily: 'Inter' }}>
            © 2025 VetriaAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;