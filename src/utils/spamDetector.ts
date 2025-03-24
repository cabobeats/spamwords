import { SpamData, SpamWord, MatchedWord, HighlightedText } from '../types';
import spamWordsData from '../data/spamwords.json';

// Load spam words data
const spamData: SpamData = spamWordsData;

/**
 * Find all occurrences of a substring in a string (case insensitive)
 */
export const findAllOccurrences = (text: string, searchTerm: string): number[] => {
  const lowerText = text.toLowerCase();
  const lowerTerm = searchTerm.toLowerCase();
  const indices: number[] = [];
  let index = lowerText.indexOf(lowerTerm);
  
  while (index !== -1) {
    indices.push(index);
    index = lowerText.indexOf(lowerTerm, index + 1);
  }
  
  return indices;
};

/**
 * Find all spam words in a text
 */
export const findSpamWords = (text: string): MatchedWord[] => {
  if (!text) return [];
  
  const matchedWords: MatchedWord[] = [];
  
  spamData.words.forEach((word) => {
    const occurrences = findAllOccurrences(text, word.term);
    
    occurrences.forEach((index) => {
      matchedWords.push({
        ...word,
        index,
        length: word.term.length,
      });
    });
  });
  
  // Sort by index
  return matchedWords.sort((a, b) => a.index - b.index);
};

/**
 * Splits text into segments for highlighting
 */
export const generateHighlightedSegments = (text: string, matchedWords: MatchedWord[]): HighlightedText[] => {
  if (!text || matchedWords.length === 0) {
    return [{ text, isSpam: false, index: 0 }];
  }
  
  // Sort matches by index
  const sortedMatches = [...matchedWords].sort((a, b) => a.index - b.index);
  
  const segments: HighlightedText[] = [];
  let lastIndex = 0;
  
  sortedMatches.forEach((match) => {
    // Add text before the match if there is any
    if (match.index > lastIndex) {
      segments.push({
        text: text.substring(lastIndex, match.index),
        isSpam: false,
        index: lastIndex
      });
    }
    
    // Add the matched word
    segments.push({
      text: text.substring(match.index, match.index + match.length),
      isSpam: true,
      matchedWord: {
        term: match.term,
        score: match.score,
        category: match.category
      },
      index: match.index
    });
    
    lastIndex = match.index + match.length;
  });
  
  // Add remaining text after the last match
  if (lastIndex < text.length) {
    segments.push({
      text: text.substring(lastIndex),
      isSpam: false,
      index: lastIndex
    });
  }
  
  return segments;
};

/**
 * Group matched words by category
 */
export const groupByCategory = (matchedWords: MatchedWord[]): Record<string, SpamWord[]> => {
  const uniqueWords = new Map<string, SpamWord>();
  
  // Create a map of unique words
  matchedWords.forEach((match) => {
    if (!uniqueWords.has(match.term)) {
      uniqueWords.set(match.term, {
        term: match.term,
        score: match.score,
        category: match.category
      });
    }
  });
  
  // Group by category
  const grouped: Record<string, SpamWord[]> = {};
  
  uniqueWords.forEach((word) => {
    if (!grouped[word.category]) {
      grouped[word.category] = [];
    }
    grouped[word.category].push(word);
  });
  
  return grouped;
};

/**
 * Calculate overall spam score based on detected words
 */
export const calculateOverallScore = (matchedWords: MatchedWord[]): number => {
  if (matchedWords.length === 0) return 0;
  
  // Get unique words
  const uniqueWords = new Map<string, number>();
  matchedWords.forEach((match) => {
    uniqueWords.set(match.term, match.score);
  });
  
  // Sum all scores
  let totalScore = 0;
  uniqueWords.forEach((score) => {
    totalScore += score;
  });
  
  return totalScore;
};

/**
 * Get category name from its key
 */
export const getCategoryName = (categoryKey: string): string => {
  return spamData.categories[categoryKey] || categoryKey;
};

/**
 * Get color for a category
 */
export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    urgency: 'amber',
    shady: 'red',
    overpromise: 'purple',
    money: 'emerald',
    unnatural: 'blue'
  };
  
  return colors[category] || 'gray';
}; 