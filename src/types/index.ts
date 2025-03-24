export interface SpamWord {
  term: string;
  score: number;
  category: string;
}

export interface SpamCategories {
  [key: string]: string;
}

export interface SpamData {
  categories: SpamCategories;
  words: SpamWord[];
}

export interface MatchedWord {
  term: string;
  score: number;
  category: string;
  index: number;
  length: number;
}

export interface HighlightedText {
  text: string;
  isSpam: boolean;
  matchedWord?: SpamWord;
  index: number;
} 