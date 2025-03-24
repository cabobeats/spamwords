import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 mt-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400">SpamDetector</span>
          </div>
          <div className="text-xs text-gray-500">
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 