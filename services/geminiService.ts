import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, ensure this is handled securely.
// Using the provided environment variable pattern.
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set. Gemini features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSampleQuestion = async (topic: string) => {
  const ai = getAiClient();
  if (!ai) throw new Error("API Key missing");

  const prompt = `Create a single multiple-choice question for the TNPSC (Tamil Nadu Public Service Commission) exam about the topic: "${topic}". 
  Provide the output in JSON format with the question, 4 options, the correct answer index (0-3), and a short explanation.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            options: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            correctAnswerIndex: { type: Type.INTEGER },
            explanation: { type: Type.STRING }
          }
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini generation error:", error);
    throw error;
  }
};