# Game Data JSON Generator & Automation Tool

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-doodax.com-blue?style=for-the-badge)](https://doodax.com)

A professional, high-performance web application designed for game portal developers, SEO specialists, and webmasters. This tool leverages the power of the Gemini API to automate the extraction and generation of structured JSON data from raw game URLs, significantly reducing the workflow time for content management.

## 🚀 Features

*   **AI-Powered Extraction**: Instantly infers game titles, descriptions, and categories from simple iframe URLs.
*   **Structured JSON Output**: Generates clean, standard JSON arrays ready for database import or static site generation.
*   **Smart Slug Generation**: automatically creates SEO-friendly URL slugs.
*   **Icon Path Prediction**: Generates standardized icon paths based on configurable patterns.
*   **Iframe Generator**: Built-in tool to wrap raw URLs in responsive HTML iframes with download capability.
*   **SEO Article Generation**: Capable of generating full SEO descriptions and articles for games.
*   **Privacy First**: Client-side operation ensures your data lists remain private.

## 📂 Project Structure

```bash
/
├── components/          # React UI Components
│   ├── IframeGenerator.tsx
│   ├── Icon.tsx
│   ├── JsonGenerator.tsx
│   ├── Modal.tsx
│   └── SeoContent.tsx   # Long-form SEO article component
├── public/              # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── App.tsx              # Main Application Entry
├── index.html           # HTML entry with Galaxy Background
├── index.tsx            # React Mount Point
├── metadata.json        # Permissions configuration
├── types.ts             # TypeScript interfaces
├── utils.ts             # API logic and helper functions
└── README.md            # Documentation
```

## 🛠 Tech Stack

*   **Frontend**: React 19 (TypeScript)
*   **AI Integration**: Google GenAI SDK (Gemini 2.5)
*   **Styling**: Tailwind CSS with custom animations
*   **Build**: Vite

## 🔗 Live Demo

Access the live tool here: [**doodax.com**](https://doodax.com)

## 🧑‍💻 Author

**HSINI MOHAMED**
*   **GitHub**: [hsinidev](https://github.com/hsinidev)
*   **Website**: [doodax.com](https://doodax.com)
*   **Contact**: hsini.web@gmail.com

---
*Created for educational and development purposes.*