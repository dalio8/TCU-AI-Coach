import React, { useState, KeyboardEvent } from 'react';
import SendIcon from './icons/SendIcon';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() && !isLoading) {
      onSendMessage(text);
      setText('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite sua dúvida sobre Auditoria de TI..."
        disabled={isLoading}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-4 pr-12 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
      />
      <button
        onClick={handleSubmit}
        disabled={isLoading || !text.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md text-slate-400 hover:bg-slate-700 hover:text-blue-400 disabled:text-slate-600 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
        aria-label="Send message"
      >
        <SendIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatInput;
