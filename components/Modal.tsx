import React, { useState } from 'react';
import Icon from './Icon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'ToS' | 'DMCA';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<Tab>('About');

  if (!isOpen) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Doodax Tools</h3>
            <p>Welcome to <strong>doodax.com</strong>. This Game Data JSON Generator is a premier utility created for developers and webmasters of game portals.</p>
            <p>Our mission is to streamline the tedious process of managing game data. By leveraging advanced AI, we automatically convert lists of raw game URLs into structured, ready-to-use JSON formats complete with slugs, titles, and descriptions. This saves valuable time on manual data entry and ensures a consistent data structure for your applications.</p>
          </div>
        );
      case 'Contact':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Contact Us</h3>
            <p>We value your feedback and are here to assist with any inquiries regarding Doodax tools.</p>
            <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <p className="mb-2"><strong>Email Support:</strong></p>
                <a href="mailto:hsini.web@gmail.com" className="text-pink-400 hover:text-pink-300 text-lg transition-colors">hsini.web@gmail.com</a>
                <p className="text-sm text-gray-400 mt-2">We typically respond within 24-48 hours.</p>
            </div>
          </div>
        );
      case 'Guide':
         return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">User Guide</h3>
            <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <p>Paste your list of game URLs into the "Raw URL Input" box. Ensure there is one URL per line.</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <p>Click the "Generate JSON" button. The AI will process each URL to infer metadata.</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <p>Review the output in the "Generated JSON Output" panel.</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <p>Use the "Copy JSON" button to grab the data, or use the Iframe Generator below for HTML wrapping.</p>
                </div>
            </div>
          </div>
        );
      case 'Privacy':
        return (
             <div className="space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Privacy Policy</h3>
                <div className="p-4 bg-yellow-900/20 border border-yellow-600/50 rounded-md">
                    <p className="text-yellow-200 font-semibold">Important Notice regarding Google Policies</p>
                    <p className="text-sm text-yellow-100 mt-1">We are committed to transparency and user safety.</p>
                </div>
                <p>At <strong>doodax.com</strong>, the privacy of our visitors is of extreme importance to us.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Data Processing:</strong> This tool operates client-side. We do not store the URLs you input or the JSON you generate on our servers.</li>
                    <li><strong>Cookies:</strong> We use local storage only to enhance user experience (e.g., remembering preferences).</li>
                    <li><strong>Third Parties:</strong> We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</li>
                </ul>
            </div>
        )
      case 'ToS':
        return (
             <div className="space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Terms of Service</h3>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Doodax if you do not agree to take all of the terms and conditions stated on this page.</p>
                <p><strong>License:</strong> Unless otherwise stated, Doodax and/or its licensors own the intellectual property rights for all material on Doodax. All intellectual property rights are reserved.</p>
                <p><strong>Disclaimer:</strong> This tool is provided "as is". We make no warranties, expressed or implied, regarding the accuracy of the AI-generated content.</p>
            </div>
        )
      case 'DMCA':
        return (
             <div className="space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">DMCA Policy</h3>
                <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights of any person or entity.</p>
                <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to:</p>
                <p className="font-bold text-pink-400">hsini.web@gmail.com</p>
                <p className="text-sm text-gray-400">Please include a detailed description of the alleged infringement.</p>
            </div>
        )
      default:
        return null;
    }
  };
  
  const tabs: {id: Tab, label: string}[] = [
      { id: 'About', label: 'About' },
      { id: 'Contact', label: 'Contact' },
      { id: 'Guide', label: 'Guide' },
      { id: 'Privacy', label: 'Privacy Policy' },
      { id: 'ToS', label: 'Terms of Service' },
      { id: 'DMCA', label: 'DMCA' },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300" onClick={onClose}>
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <header className="flex items-center justify-between p-5 border-b border-gray-800 bg-gray-800/50">
          <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name="info" className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-100">Doodax Information Center</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-full p-1 transition-all">
            <Icon name="close" className="w-6 h-6" />
          </button>
        </header>

        <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
           {/* Sidebar Navigation */}
           <nav className="w-full md:w-64 bg-gray-800/30 border-b md:border-b-0 md:border-r border-gray-800 p-3 flex-shrink-0">
            <ul className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide">
                {tabs.map(tab => (
                     <li key={tab.id}>
                        <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full text-left px-4 py-3 text-sm rounded-lg transition-all duration-200 flex items-center gap-2 ${activeTab === tab.id ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
          </nav>

          {/* Content Area */}
          <main className="flex-1 p-6 md:p-8 overflow-y-auto text-gray-300 leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {renderContent()}
          </main>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Modal;