import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 py-3 text-white shadow-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="Spam Detector Home">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M16 9L10.5 14.5L8 12" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium tracking-wide">SpamDetector</span>
            </Link>
          </div>
          
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Link href="/" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="https://cabobeats.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 