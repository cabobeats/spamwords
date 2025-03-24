import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = 'Paste text to analyze for spam content...'
}) => {
  return (
    <div className="w-full">
      <textarea
        className="w-full p-3 border border-gray-200 rounded-md h-60 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 resize-none bg-white text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Input text to analyze"
      />
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <button
          onClick={() => onChange('')}
          className="text-gray-400 hover:text-blue-500 transition-colors text-xs"
          disabled={!value}
        >
          Clear
        </button>
        <span>{value.length} chars</span>
      </div>
    </div>
  );
};

export default TextInput; 