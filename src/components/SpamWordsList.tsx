import React from 'react';
import { SpamWord } from '../types';
import { getCategoryName, getCategoryColor } from '../utils/spamDetector';

interface SpamWordsListProps {
  wordsByCategory: Record<string, SpamWord[]>;
  totalScore: number;
}

const SpamWordsList: React.FC<SpamWordsListProps> = ({ wordsByCategory, totalScore }) => {
  const categories = Object.keys(wordsByCategory);
  
  if (categories.length === 0) {
    return (
      <div className="p-3 border border-gray-200 rounded-md bg-white">
        <p className="text-gray-400 text-center text-xs">No spam words detected</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      <div className="bg-white rounded-md p-3 border border-gray-200">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xs font-medium text-gray-600">Score</h3>
          <div>
            <span 
              className={`text-sm font-medium px-1.5 py-0.5 rounded ${
                totalScore > 30 
                  ? 'bg-red-50 text-red-600' 
                  : totalScore > 15 
                    ? 'bg-amber-50 text-amber-600' 
                    : 'bg-green-50 text-green-600'
              }`}
            >
              {totalScore}
            </span>
          </div>
        </div>
        <p className="text-xs text-gray-400">
          {totalScore > 30 
            ? 'High spam score detected' 
            : totalScore > 15 
              ? 'Moderate spam score detected' 
              : 'Low spam score detected'}
        </p>
      </div>

      <div className="bg-white rounded-md p-3 border border-gray-200">
        <h3 className="text-xs font-medium text-gray-600 mb-3">Detected Words</h3>
        
        <div className="space-y-3">
          {categories.map((category) => {
            const words = wordsByCategory[category];
            const categoryName = getCategoryName(category);
            const colorName = getCategoryColor(category);
            
            // Get appropriate color classes based on category
            let textColorClass = 'text-gray-600';
            let dotColorClass = 'bg-gray-400';
            let bgColorClass = 'bg-gray-50';
            let borderColorClass = 'border-gray-100';
            
            switch (colorName) {
              case 'amber':
                textColorClass = 'text-amber-600';
                dotColorClass = 'bg-amber-400';
                bgColorClass = 'bg-amber-50';
                borderColorClass = 'border-amber-100';
                break;
              case 'red':
                textColorClass = 'text-red-600';
                dotColorClass = 'bg-red-400';
                bgColorClass = 'bg-red-50';
                borderColorClass = 'border-red-100';
                break;
              case 'purple':
                textColorClass = 'text-purple-600';
                dotColorClass = 'bg-purple-400';
                bgColorClass = 'bg-purple-50';
                borderColorClass = 'border-purple-100';
                break;
              case 'emerald':
                textColorClass = 'text-emerald-600';
                dotColorClass = 'bg-emerald-400';
                bgColorClass = 'bg-emerald-50';
                borderColorClass = 'border-emerald-100';
                break;
              case 'blue':
                textColorClass = 'text-blue-600';
                dotColorClass = 'bg-blue-400';
                bgColorClass = 'bg-blue-50';
                borderColorClass = 'border-blue-100';
                break;
            }
            
            return (
              <div key={category} className="space-y-1.5">
                <h4 className={`text-xs ${textColorClass} flex items-center`}>
                  <span 
                    className={`w-1.5 h-1.5 rounded-full ${dotColorClass} mr-1.5`}
                  ></span>
                  {categoryName} ({words.length})
                </h4>
                
                <div className="flex flex-wrap gap-1">
                  {words.map((word) => (
                    <span 
                      key={word.term} 
                      className={`text-xs ${bgColorClass} ${textColorClass} px-1.5 py-0.5 rounded border ${borderColorClass} inline-flex items-center`}
                    >
                      {word.term}
                      <span className={`ml-1 text-xs text-gray-500 font-mono`}>
                        {word.score}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpamWordsList; 