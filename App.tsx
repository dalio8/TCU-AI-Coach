import React, { useState, useRef, useEffect, useCallback } from 'react';
import { chat } from './services/geminiService';
import { Message } from './types';
import ChatInterface from './components/ChatInterface';
import { SUGGESTION_CHIPS } from './constants';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(16); // Base font size in pixels
  const chatInstance = useRef(chat);

  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    let currentModelResponse = "";
    const modelMessageId = (Date.now() + 1).toString();

    try {
      const stream = await chatInstance.current.sendMessageStream({ message: text });

      setMessages(prev => [...prev, { id: modelMessageId, role: 'model', content: " " }]);

      for await (const chunk of stream) {
        currentModelResponse += chunk.text;
        setMessages(prev =>
          prev.map(msg =>
            msg.id === modelMessageId
              ? { ...msg, content: currentModelResponse }
              : msg
          )
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: modelMessageId,
        role: 'model',
        content: "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
      };
      // In case of error, either add a new error message or replace the placeholder
      setMessages(prev => {
        const existingModelMessage = prev.find(msg => msg.id === modelMessageId);
        if (existingModelMessage) {
          return prev.map(msg => msg.id === modelMessageId ? errorMessage : msg);
        }
        return [...prev, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleFontSizeChange = useCallback((increment: number) => {
    setFontSize(prevSize => {
      // Clamp the font size between a readable min and max
      return Math.max(12, Math.min(24, prevSize + increment));
    });
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 to-blue-950 text-slate-100 font-sans">
      <ChatInterface
        messages={messages}
        isLoading={isLoading}
        onSendMessage={handleSendMessage}
        suggestionChips={SUGGESTION_CHIPS}
        fontSize={fontSize}
        onFontSizeChange={handleFontSizeChange}
      />
    </div>
  );
};

export default App;
