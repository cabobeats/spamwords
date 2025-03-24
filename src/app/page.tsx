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
import { SpamWord, HighlightedText as HighlightedTextType } from '../types';
import Script from 'next/script';

export default function Home() {
  const [text, setText] = useState('');
  const [highlightedSegments, setHighlightedSegments] = useState<HighlightedTextType[]>([]);
  const [groupedWords, setGroupedWords] = useState<Record<string, SpamWord[]>>({});
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (!text) {
      setHighlightedSegments([]);
      setGroupedWords({});
      setTotalScore(0);
      return;
    }

    const detected = findSpamWords(text);
    
    const segments = generateHighlightedSegments(text, detected);
    setHighlightedSegments(segments);

    const grouped = groupByCategory(detected);
    setGroupedWords(grouped);

    const score = calculateOverallScore(detected);
    setTotalScore(score);
  }, [text]);

  return (
    <>
      <Header />
      
      <Script id="schema-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Spam Words Detector",
          "url": "https://spamdetector.yourdomain.com",
          "description": "Free tool to detect spam words and phrases in your email marketing, website content, and social media posts.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "creator": {
            "@type": "Organization",
            "name": "Blue Ocean Records LLC",
            "url": "https://prodbycabo.com"
          }
        })}
      </Script>
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6 bg-white p-4 rounded-md border border-gray-200">
          <h1 className="text-lg font-medium text-gray-800 mb-2">Spam Word Detector</h1>
          <p className="text-sm text-gray-600">
            Paste any text to analyze for potential spam phrases. The tool will highlight suspicious words 
            and provide an overall spam score based on our extensive database of common spam terminology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium mb-2 text-gray-600 uppercase tracking-wide">Input Text</h2>
              <p className="text-xs text-gray-500 mb-2">
                Paste emails, marketing copy, or any text you want to check for spam patterns. Analysis happens instantly as you type.
              </p>
              <TextInput 
                value={text} 
                onChange={setText} 
              />
            </div>
            
            <div>
              <h2 className="text-sm font-medium mb-2 text-gray-600 uppercase tracking-wide">Highlighted Text</h2>
              <p className="text-xs text-gray-500 mb-2">
                {text ? "Spam words are highlighted below. Hover over highlighted words to see details." : "Analyzed text will appear here with highlighted spam words."}
              </p>
              <div className="h-64">
                {text ? (
                  <HighlightedText segments={highlightedSegments} />
                ) : (
                  <div className="w-full p-3 border border-gray-200 rounded-md bg-white h-full flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Enter text above to analyze</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-medium mb-2 text-gray-600 uppercase tracking-wide">Analysis Results</h2>
            <p className="text-xs text-gray-500 mb-2">
              {text ? 
                "Detected spam phrases are grouped by category below. Higher scores indicate stronger spam signals." : 
                "Results will appear here after you enter text for analysis."}
            </p>
            <SpamWordsList 
              wordsByCategory={groupedWords} 
              totalScore={totalScore}
            />
            
            {totalScore > 0 && (
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-md p-3">
                <h3 className="text-xs font-medium text-blue-700 mb-1">What does this mean?</h3>
                <p className="text-xs text-gray-600">
                  {totalScore > 30 
                    ? "This text contains many phrases commonly found in spam. Consider rephrasing to improve deliverability and trustworthiness." 
                    : totalScore > 15 
                      ? "Some spam-like phrases detected. Minor adjustments may improve the quality of your message." 
                      : "Low spam score. This text contains few or no concerning phrases."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
