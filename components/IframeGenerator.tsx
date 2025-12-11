import React, { useState } from 'react';
import { getFilenameFromUrl, createIframeHtml } from '../utils';
import Icon from './Icon';

const IframeGenerator: React.FC = () => {
    const [iframeUrl, setIframeUrl] = useState('');
    const [error, setError] = useState('');

    const handleGenerateAndDownload = () => {
        try {
            // Basic URL validation
            new URL(iframeUrl);
        } catch (_) {
            setError('Please enter a valid URL.');
            return;
        }
        setError('');

        const filename = getFilenameFromUrl(iframeUrl);
        const title = filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const htmlContent = createIframeHtml(iframeUrl, title);

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${filename}.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    };

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-pink-400 mb-4">Iframe HTML Generator</h2>
            <div className="flex flex-col space-y-4">
                 <label htmlFor="iframe-url" className="block text-sm font-medium text-gray-300">
                    Game URL
                </label>
                <input
                    id="iframe-url"
                    type="url"
                    value={iframeUrl}
                    onChange={(e) => setIframeUrl(e.target.value)}
                    placeholder="https://example.com/game/index.html"
                    className="bg-gray-900 border border-gray-600 text-gray-200 rounded-md p-3 w-full focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                />
                <button
                    onClick={handleGenerateAndDownload}
                    className="w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-md hover:bg-pink-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
                    disabled={!iframeUrl}
                >
                    <Icon name="download" className="w-5 h-5" />
                    Generate & Download HTML
                </button>
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default IframeGenerator;
