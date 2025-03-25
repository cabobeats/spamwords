import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 py-4 text-white shadow-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center" aria-label="Spam Detector Home">
            <svg
              className="w-8 h-8 mr-3 text-blue-400"
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
            <span className="text-lg font-medium tracking-wide">SpamWords.xyz</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 