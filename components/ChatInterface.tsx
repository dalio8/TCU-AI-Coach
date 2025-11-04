import React, { useRef, useEffect } from 'react';
import { Message } from '../types';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SuggestionChips from './SuggestionChips';
import BotIcon from './icons/BotIcon';

interface ChatInterfaceProps {
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (text: string) => void;
  suggestionChips: string[];
  fontSize: number;
  onFontSizeChange: (increment: number) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  isLoading,
  onSendMessage,
  suggestionChips,
  fontSize,
  onFontSizeChange,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto w-full">
      <header className="p-4 border-b border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-full">
                <BotIcon className="w-8 h-8 text-blue-400" />
            </div>
            <div>
                <h1 className="text-xl font-bold text-slate-50">TCU AI Coach</h1>
                <p className="text-sm text-slate-400">Seu assistente de IA para a prova de Auditoria de TI</p>
            </div>
        </div>
        <div className="flex items-center space-x-2">
            <button
              onClick={() => onFontSizeChange(-2)}
              disabled={fontSize <= 12}
              className="w-8 h-8 flex items-center justify-center border border-slate-600 rounded-md text-slate-400 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Diminuir tamanho da fonte"
            >
              A-
            </button>
            <button
              onClick={() => onFontSizeChange(2)}
              disabled={fontSize >= 24}
              className="w-8 h-8 flex items-center justify-center border border-slate-600 rounded-md text-slate-400 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Aumentar tamanho da fonte"
            >
              A+
            </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.length === 0 && !isLoading ? (
          <SuggestionChips suggestions={suggestionChips} onSelect={onSendMessage} />
        ) : (
          messages.map((msg, index) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              isLoading={isLoading && index === messages.length - 1}
              fontSize={fontSize}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </main>

      <footer className="p-4 md:p-6 border-t border-slate-700/50">
        <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
      </footer>
    </div>
  );
};

export default ChatInterface;
