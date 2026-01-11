import { GoogleGenAI, Type } from "@google/genai";
import { AiRecommendation } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCoffeeRecommendation = async (mood: string, preference: string): Promise<AiRecommendation | null> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables. Returning mock data.");
    // Fallback mock data if key is missing (dev experience)
    return {
      name: "Ethiopian Yirgacheffe",
      description: "A bright, floral cup to lift your spirits and match your energetic mood.",
      notes: ["Jasmine", "Bergamot", "Lemon"],
      brewingMethod: "Pour Over (V60)"
    };
  }

  try {
    const prompt = `
      Act as an expert coffee sommelier.
      The user feels: "${mood}".
      The user prefers: "${preference}".
      Recommend a specific type of coffee bean origin or drink.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Name of the coffee drink or bean origin" },
            description: { type: Type.STRING, description: "A sophisticated description of why this fits the user" },
            notes: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 flavor notes" },
            brewingMethod: { type: Type.STRING, description: "Recommended brewing method" }
          },
          required: ["name", "description", "notes", "brewingMethod"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as AiRecommendation;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};