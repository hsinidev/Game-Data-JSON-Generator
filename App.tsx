import React, { useState } from 'react';
import JsonGenerator from './components/JsonGenerator';
import IframeGenerator from './components/IframeGenerator';
import Modal from './components/Modal';
import Icon from './components/Icon';
import SeoContent from './components/SeoContent';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="text-white min-h-screen flex flex-col font-sans relative z-10 selection:bg-pink-500 selection:text-white">
            
            {/* Header */}
            <header className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-3">
                             <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-2 rounded-lg shadow-lg shadow-purple-500/20">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.38,6.58L10.9,8.06L12.32,9.48L10.9,10.9L12.32,12.32L10.9,13.75L12.38,15.23L14.25,13.35L12.83,11.93L14.25,10.5L12.83,9.08L14.25,7.66M18.88,4.12C18.1,3.34 17.13,3 16.12,3H7.88C5.75,3 4,4.75 4,6.88V17.12C4,19.25 5.75,21 7.88,21H16.12C18.25,21 20,19.25 20,17.12V6.88C20,5.87 19.66,4.9 18.88,4.12Z" />
                                </svg>
                            </div>
                            <h1 className="text-2xl font-bold text-white tracking-wide">
                                doodax<span className="text-purple-400">.com</span>
                            </h1>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                            aria-label="Open Information Modal"
                        >
                           <span className="text-sm font-medium text-gray-300 group-hover:text-white hidden sm:inline">Info & Guide</span>
                           <Icon name="info" className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-4 md:p-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    
                    {/* Hero Section */}
                    <div className="text-center py-8">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-white mb-4 animate-fade-in-up">
                            Automate Your Game Data
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Transform raw URLs into structured JSON instantly. The essential tool for modern game portals and developers.
                        </p>
                    </div>

                    {/* Tools Container */}
                    <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-6 md:p-8">
                        <JsonGenerator />
                    </div>
                    
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-700/50"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-3 bg-gray-900 text-sm text-gray-500 rounded-full border border-gray-700/50">Additional Tools</span>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <IframeGenerator />
                    </div>

                    {/* SEO Article Section */}
                    <SeoContent />
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-black/40 backdrop-blur-lg border-t border-white/5 py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm text-gray-500 mb-2">
                        &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                        Powered by 
                        <a 
                            href="https://github.com/hsinidev" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold hover:opacity-80 transition-opacity"
                        >
                            HSINI MOHAMED
                        </a>
                    </p>
                </div>
            </footer>
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default App;