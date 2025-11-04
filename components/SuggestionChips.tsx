import React from 'react';
import BotIcon from './icons/BotIcon';

interface SuggestionChipsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

const SuggestionChips: React.FC<SuggestionChipsProps> = ({ suggestions, onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="p-4 mb-4 bg-blue-500/10 rounded-full">
        <BotIcon className="w-16 h-16 text-blue-400" />
      </div>
      <h2 className="text-2xl font-bold text-slate-200 mb-2">TCU AI Coach</h2>
      <p className="text-slate-400 mb-6">Como posso ajudar na sua preparação hoje?</p>
      <div className="flex flex-wrap justify-center gap-3">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSelect(suggestion)}
            className="bg-slate-800/80 border border-slate-700/60 rounded-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 hover:border-slate-600 transition-all"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionChips;
