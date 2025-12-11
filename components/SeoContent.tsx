import React, { useState } from 'react';

const SeoContent: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="mt-16 w-full max-w-5xl mx-auto bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="p-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
                    Mastering Game Data: The Ultimate JSON Generator for Portals
                </h2>
                
                {/* Collapsed/Expanded Container */}
                <div className={`relative transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-full opacity-100' : 'max-h-32 opacity-80 overflow-hidden'}`}>
                    
                    {/* Content */}
                    <article className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p className="lead text-xl text-gray-400 mb-8">
                            In the rapidly evolving world of online gaming, managing content for game portals is a challenge that demands efficiency, precision, and scalability. Welcome to <strong>Doodax.com</strong>, the premier destination for developers and webmasters seeking to automate the transformation of raw game URLs into structured, SEO-optimized JSON data.
                        </p>

                        <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-purple-500 mb-8">
                            <h3 className="text-xl font-bold text-white mt-0">Table of Contents</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 list-none pl-0">
                                <li><a href="#why-automation" className="text-purple-400 hover:underline">1. Why Automation Matters</a></li>
                                <li><a href="#features" className="text-purple-400 hover:underline">2. Core Features of Doodax</a></li>
                                <li><a href="#technical-breakdown" className="text-purple-400 hover:underline">3. Technical Breakdown</a></li>
                                <li><a href="#seo-impact" className="text-purple-400 hover:underline">4. SEO Impact for Portals</a></li>
                                <li><a href="#faq" className="text-purple-400 hover:underline">5. Frequently Asked Questions</a></li>
                            </ul>
                        </div>

                        <h3 id="why-automation" className="text-2xl font-bold text-white mt-8 mb-4">1. Why Automation is Critical for Game Portals</h3>
                        <p>
                            Running a successful arcade or game portal involves managing thousands of games. Manually copying URLs, writing titles, creating slugs, and finding icons is not just tedious—it's prone to human error. Doodax solves this by using advanced AI logic to infer metadata directly from the source URL. Whether you are running a WordPress site, a custom React app, or a simple HTML portal, structured JSON is the backbone of modern content management systems.
                        </p>

                        <h3 id="features" className="text-2xl font-bold text-white mt-8 mb-4">2. Core Features of the Doodax Generator</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Instant URL Parsing:</strong> Paste a list of 100+ URLs, and watch them convert instantly.</li>
                            <li><strong>AI-Driven Metadata:</strong> Our system analyzes the URL structure to generate human-readable titles (e.g., converting <code>/moto-x3m-winter</code> to "Moto X3M Winter").</li>
                            <li><strong>Intelligent Slugification:</strong> SEO-friendly URLs are generated automatically, stripping special characters and ensuring compatibility.</li>
                            <li><strong>Thumbnails & Icons:</strong> Predictive algorithms generate standard icon paths, saving you from manually uploading thousands of images.</li>
                            <li><strong>Duplicate Removal:</strong> The tool automatically cleans your input, ensuring your database remains free of duplicate entries.</li>
                        </ul>

                        <h3 id="technical-breakdown" className="text-2xl font-bold text-white mt-8 mb-4">3. Technical Breakdown: How JSON Powers the Web</h3>
                        <p>
                            JSON (JavaScript Object Notation) has become the de facto standard for data interchange. By converting your game links into a JSON array, you unlock the ability to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fetch games asynchronously using AJAX or Fetch API.</li>
                            <li>Render game grids dynamically using React, Vue, or Angular.</li>
                            <li>Easily migrate data between different database systems (MongoDB, SQL, Firebase).</li>
                        </ul>
                        <p>
                            Our tool adheres to strict schema standards, ensuring that keys like `GAME_NAME`, `SLUG`, and `IFRAME_URL` are always present and correctly formatted.
                        </p>

                        <h3 id="seo-impact" className="text-2xl font-bold text-white mt-8 mb-4">4. Boosting SEO with Structured Data</h3>
                        <p>
                            Search engines love structure. By utilizing clean data generated by Doodax, you can easily implement Schema.org markup (Game or SoftwareApplication schemas) on your portal. This leads to Rich Snippets in search results, higher click-through rates (CTR), and better indexing coverage.
                        </p>

                        <h3 id="faq" className="text-2xl font-bold text-white mt-8 mb-4">5. Frequently Asked Questions (FAQ)</h3>
                        
                        <div className="space-y-4 mt-4">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-bold text-purple-300">Is Doodax free to use?</h4>
                                <p className="mt-1">Yes, Doodax is a completely free tool developed for the community.</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-bold text-purple-300">Do you store my data?</h4>
                                <p className="mt-1">No. All processing happens in your browser or via transient API calls. We value your privacy.</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-bold text-purple-300">Can I generate iframes?</h4>
                                <p className="mt-1">Absolutely. Check the "Iframe Generator" section below the JSON tool to create embeddable HTML files.</p>
                            </div>
                        </div>

                        <p className="mt-8 text-sm text-gray-500 italic">
                            Doodax.com is committed to providing the best developer tools for the gaming industry. Continuous updates ensure compatibility with the latest web standards.
                        </p>
                    </article>

                    {/* Gradient Overlay when collapsed */}
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none"></div>
                    )}
                </div>

                {/* Toggle Button */}
                <div className="mt-4 flex justify-center relative z-10">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {isExpanded ? (
                            <>
                                <span>Read Less</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </>
                        ) : (
                            <>
                                <span>Read More about Doodax</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SeoContent;