'use client';

import React, { useState, useEffect } from 'react';
import TextInput from '../components/TextInput';
import HighlightedText from '../components/HighlightedText';
import SpamWordsList from '../components/SpamWordsList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  findSpamWords, 
  generateHighlightedSegments, 
  groupByCategory,
  calculateOverallScore
} from '../utils/spamDetector';
import { MatchedWord, SpamWord } from '../types';

export default function Home() {
  const [text, setText] = useState('');
  const [matchedWords, setMatchedWords] = useState<MatchedWord[]>([]);
  const [highlightedSegments, setHighlightedSegments] = useState<any[]>([]);
  const [groupedWords, setGroupedWords] = useState<Record<string, SpamWord[]>>({});
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (!text) {
      setMatchedWords([]);
      setHighlightedSegments([]);
      setGroupedWords({});
      setTotalScore(0);
      return;
    }

    const detected = findSpamWords(text);
    setMatchedWords(detected);

    const segments = generateHighlightedSegments(text, detected);
    setHighlightedSegments(segments);

    const grouped = groupByCategory(detected);
    setGroupedWords(grouped);

    const score = calculateOverallScore(detected);
    setTotalScore(score);
  }, [text]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium mb-2 text-gray-600 uppercase tracking-wide">Input Text</h2>
              <TextInput 
                value={text} 
                onChange={setText} 
              />
            </div>
            
            {text && (
              <div>
                <h2 className="text-sm font-medium mb-2 text-gray-600 uppercase tracking-wide">Highlighted Text</h2>
                <HighlightedText segments={highlightedSegments} />
              </div>
            )}
          </div>
          
          <div>
            <h2 className="text-sm font-medium mb-2 text-gray-600 uppercase tracking-wide">Analysis Results</h2>
            <SpamWordsList 
              wordsByCategory={groupedWords} 
              totalScore={totalScore}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
