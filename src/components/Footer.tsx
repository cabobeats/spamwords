import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">About Spam Detector</h3>
            <p className="text-xs text-gray-500 mb-4">
              Our free spam word detection tool helps marketers, content creators, and email senders 
              identify potential spam triggers in their content to improve deliverability.
            </p>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Blue Ocean Records LLC
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">Related Tools</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openfunnel.st" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-blue-400"
                >
                  OpenFunnel - Marketing Funnel Builder
                </a>
              </li>
              <li>
                <a 
                  href="https://headshotphoto.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-blue-400"
                >
                  HeadshotPhoto - Professional AI Headshots
                </a>
              </li>
              <li>
                <a 
                  href="https://beatcontract.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-blue-400"
                >
                  BeatContract - Music Licensing Platform
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/terms"
                  className="text-xs text-gray-500 hover:text-blue-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy"
                  className="text-xs text-gray-500 hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:info@prodbycabo.com"
                  className="text-xs text-gray-500 hover:text-blue-400"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a 
                  href="https://prodbycabo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-blue-400"
                >
                  Company Website
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-600">
            Spam Words Detector - Free Tool to Analyze and Improve Email & Marketing Content
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 