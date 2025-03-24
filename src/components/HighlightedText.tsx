import React from 'react';
import { HighlightedText as HighlightedTextType } from '../types';
import { getCategoryColor } from '../utils/spamDetector';

interface HighlightedTextViewProps {
  segments: HighlightedTextType[];
}

const HighlightedText: React.FC<HighlightedTextViewProps> = ({ segments }) => {
  if (!segments || segments.length === 0) {
    return null;
  }

  return (
    <div className="w-full p-3 border border-gray-200 rounded-md bg-white min-h-32 max-h-80 overflow-y-auto">
      <p className="whitespace-pre-wrap break-words text-sm text-gray-700">
        {segments.map((segment, index) => {
          if (!segment.isSpam) {
            return <span key={`${segment.index}-${index}`}>{segment.text}</span>;
          }

          const category = segment.matchedWord?.category || 'unknown';
          const score = segment.matchedWord?.score || 0;
          const colorName = getCategoryColor(category);
          
          // Determine background color based on category
          let highlightClass = '';
          switch (colorName) {
            case 'amber':
              highlightClass = 'bg-amber-50 border-b border-amber-200';
              break;
            case 'red':
              highlightClass = 'bg-red-50 border-b border-red-200';
              break;
            case 'purple':
              highlightClass = 'bg-purple-50 border-b border-purple-200';
              break;
            case 'emerald':
              highlightClass = 'bg-emerald-50 border-b border-emerald-200';
              break;
            case 'blue':
              highlightClass = 'bg-blue-50 border-b border-blue-200';
              break;
            default:
              highlightClass = 'bg-gray-50 border-b border-gray-200';
          }
          
          return (
            <span
              key={`${segment.index}-${index}`}
              className={highlightClass}
              title={`${segment.matchedWord?.term} (${category}, score: ${score})`}
            >
              {segment.text}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default HighlightedText; 