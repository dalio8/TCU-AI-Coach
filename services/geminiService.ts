import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real application, you might want to show a more user-friendly error message
  // or disable the chat functionality. For this example, we throw an error.
  throw new Error("API_KEY environment variable not set. Please set it in your environment.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-flash-lite-latest';

export const chat: Chat = ai.chats.create({
  model: model,
  config: {
    systemInstruction: SYSTEM_INSTRUCTION,
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
  },
});