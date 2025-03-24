import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-3 md:mb-0">
            <span className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Blue Ocean Records LLC
            </span>
          </div>
          
          <div className="w-full md:w-1/3 text-center mb-3 md:mb-0">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://openfunnel.st" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-blue-400"
              >
                OpenFunnel
              </a>
              <a 
                href="https://headshotphoto.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-blue-400"
              >
                HeadshotPhoto
              </a>
              <a 
                href="https://beatcontract.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-blue-400"
              >
                BeatContract
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="space-x-6">
              <Link 
                href="/terms"
                className="text-xs text-gray-500 hover:text-blue-400"
              >
                Terms
              </Link>
              <Link 
                href="/privacy"
                className="text-xs text-gray-500 hover:text-blue-400"
              >
                Privacy
              </Link>
              <a 
                href="mailto:info@prodbycabo.com"
                className="text-xs text-gray-500 hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 