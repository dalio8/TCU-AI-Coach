import React from 'react';
import { Message } from '../types';
import BotIcon from './icons/BotIcon';
import UserIcon from './icons/UserIcon';
import TypingIndicator from './TypingIndicator';

interface ChatMessageProps {
  message: Message;
  isLoading: boolean;
  fontSize: number;
}

const parseMarkdown = (text: string): string => {
  let html = text;

  // Process lists first to handle multi-line lists correctly
  const listRegex = /(?:(?:^|\n)(?:(?:\*|\•) [^\n]+)+)/g;
  html = html.replace(listRegex, (match) => {
    const items = match.trim().split('\n');
    const listItems = items
      .map((item) => `<li>${item.replace(/^(\*|\•) /, '')}</li>`)
      .join('');
    // Add Tailwind classes for basic list styling
    return `<ul class="list-disc list-outside pl-5 my-2 space-y-1">${listItems}</ul>`;
  });

  // Process bold text
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Process remaining newlines into <br>, but avoid adding extra breaks around lists
  html = html.replace(/\n/g, '<br />')
             .replace(/<br \/>(\s*<ul)/g, '$1')
             .replace(/(<\/ul>\s*)<br \/>/g, '$1');

  return html;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLoading, fontSize }) => {
  const isModel = message.role === 'model';

  const contentWithIndicator = () => {
    const content = (
      <div
        className="max-w-none break-words"
        style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
        dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
      />
    );
    
    if (isModel && isLoading) {
      // If content is just a space (initial placeholder), only show indicator
      if (message.content.trim() === '') {
        return <TypingIndicator />;
      }
      return (
        <>
          {content}
          <TypingIndicator />
        </>
      );
    }
    return content;
  };

  return (
    <div className={`flex items-start gap-4 ${!isModel && 'justify-end'}`}>
      {isModel && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
          <BotIcon className="w-5 h-5 text-blue-400" />
        </div>
      )}
      <div
        className={`max-w-xl p-4 rounded-2xl ${
          isModel
            ? 'bg-slate-800/80 rounded-tl-none'
            : 'bg-blue-600 text-white rounded-tr-none'
        }`}
      >
        {contentWithIndicator()}
      </div>
      {!isModel && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
          <UserIcon className="w-5 h-5 text-slate-400" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
