import React, { useState } from 'react';
import { generateGameData } from '../utils';

const JsonGenerator: React.FC = () => {
    const [rawUrls, setRawUrls] = useState('');
    const [jsonData, setJsonData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        const urls = rawUrls.split('\n').map(url => url.trim()).filter(url => url.length > 0);
        // Remove duplicates
        const uniqueUrls: string[] = [...new Set(urls)];

        if (uniqueUrls.length === 0) {
            setError('Please enter at least one URL.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setJsonData('');

        try {
            const gameDataArray = await generateGameData(uniqueUrls);
            setJsonData(JSON.stringify(gameDataArray, null, 2));
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(`An error occurred while generating JSON: ${errorMessage}. See console for details.`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleCopy = () => {
        if (jsonData) {
            navigator.clipboard.writeText(jsonData);
            // In a real app, a toast notification for "Copied!" would be ideal here.
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="flex flex-col h-full">
                <label htmlFor="raw-urls" className="block text-sm font-medium text-gray-300 mb-2">
                    Raw URL Input
                </label>
                <textarea
                    id="raw-urls"
                    value={rawUrls}
                    onChange={(e) => setRawUrls(e.target.value)}
                    placeholder="Enter game URLs, one per line..."
                    className="flex-grow bg-gray-900 border border-gray-700 text-gray-200 rounded-md p-3 w-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all min-h-[300px]"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="mt-4 w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </>
                    ) : (
                        'Generate JSON'
                    )}
                </button>
            </div>
            <div className="flex flex-col h-full">
                <label htmlFor="json-output" className="block text-sm font-medium text-gray-300 mb-2">
                    Generated JSON Output
                </label>
                <textarea
                    id="json-output"
                    value={jsonData}
                    readOnly
                    placeholder="JSON output will appear here..."
                    className="flex-grow bg-gray-900 border border-gray-700 text-gray-200 rounded-md p-3 w-full font-mono text-sm min-h-[300px]"
                />
                <button
                    onClick={handleCopy}
                    disabled={!jsonData || isLoading}
                    className="mt-4 w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-md hover:bg-pink-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
                >
                    Copy JSON
                </button>
                {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
            </div>
        </div>
    );
};

export default JsonGenerator;