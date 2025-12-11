// Fix: Implemented Gemini API call to generate game data from URLs, replacing placeholder content.
import { GoogleGenAI, Type } from "@google/genai";
import { Game } from './types';

// Assuming API_KEY is set in the environment as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGameData = async (urls: string[]): Promise<Game[]> => {
    const gameDataPromises = urls.map(async (url) => {
        try {
            // Use gemini-3-pro-preview for complex tasks like article generation as per guidelines
            const model = 'gemini-3-pro-preview';
            
            const prompt = `Given the following game iframe URL, generate the required JSON data: ${url}.
- The GAME_NAME should be the official title of the game.
- The SLUG should be a URL-friendly version of the GAME_NAME.
- The IFRAME_URL is the provided URL.
- The ICON_URL should be a best-guess based on the game name, in the format: https://playszgames.com/wp-content/uploads/thumbs/custom/A/{slug}-150x150.webp. Replace 'A' with the first letter of the game name.
- The EXCERPT should be a short, engaging, SEO-friendly paragraph (around 50 words) describing the game. It must be valid HTML, likely wrapped in <p> tags.
- The SEO_ARTICLE_FULL should be a comprehensive 500-word article about the game, including its history, gameplay, tips, and why it's popular. Use HTML for formatting (h2, p, ul, li).
- The RELATED_GAMES should be an array of 3 other popular game titles that are similar in genre or gameplay.`;
            
            const response = await ai.models.generateContent({
                model,
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            GAME_NAME: { type: Type.STRING },
                            SLUG: { type: Type.STRING },
                            IFRAME_URL: { type: Type.STRING },
                            ICON_URL: { type: Type.STRING },
                            EXCERPT: { type: Type.STRING },
                            SEO_ARTICLE_FULL: { type: Type.STRING },
                            RELATED_GAMES: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING }
                            }
                        },
                        required: ["GAME_NAME", "SLUG", "EXCERPT", "SEO_ARTICLE_FULL", "RELATED_GAMES", "ICON_URL"]
                    }
                }
            });

            const jsonStr = response.text;
            if (!jsonStr) {
                throw new Error("No text content generated from model.");
            }
            const gameData = JSON.parse(jsonStr);
            
            gameData.IFRAME_URL = url; // Ensure the original URL is used.
            
            return gameData as Game;

        } catch (error) {
            console.error(`Failed to process URL ${url}:`, error);
            // Return a placeholder for failed URLs
            return {
                GAME_NAME: `Failed to process URL`,
                SLUG: `error-${new Date().getTime()}`,
                IFRAME_URL: url,
                ICON_URL: '',
                EXCERPT: `<p>Error generating data for this URL.</p>`,
                SEO_ARTICLE_FULL: `Error: ${error instanceof Error ? error.message : String(error)}`,
                RELATED_GAMES: [],
            };
        }
    });
    
    return Promise.all(gameDataPromises);
};


export const getFilenameFromUrl = (url: string): string => {
  try {
    const path = new URL(url).pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    // Remove extension and handle empty filenames
    return filename.replace(/\.(html|htm)$/, '') || 'game';
  } catch {
    // Fallback for invalid URLs
    return 'game';
  }
};

export const createIframeHtml = (url: string, title: string): string => {
  // Sanitize title to prevent HTML injection
  const sanitizedTitle = title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const sanitizedUrl = url.replace(/"/g, '&quot;');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sanitizedTitle}</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <iframe src="${sanitizedUrl}" allowfullscreen></iframe>
</body>
</html>`;
};