import { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'menu', label: 'Menu', icon: '🍴' },
    { id: 'service', label: 'Services', icon: '⭐' },
    { id: 'contact', label: 'Contact', icon: '📞' },
    { id: 'info', label: 'Info', icon: 'ℹ️' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 shadow-2xl relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative z-10 px-8 py-3 font-bold text-lg transition-all duration-300 rounded-full ${
              activeTab === tab.id
                ? 'bg-white text-red-600 shadow-xl scale-110'
                : 'text-white hover:bg-white/20 hover:scale-105'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-orange-600 shadow-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src="/icon.webp" alt="Logo" loading="eager" decoding="sync" fetchPriority="high" className="w-12 h-12 rounded-full border-2 border-white shadow-lg" />
            <div>
              <h1 className="text-2xl font-black text-white">Temple Tacos</h1>
              <p className="text-xs text-white/90">Taco Place</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-white/20 rounded-lg transition-all"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="bg-gradient-to-b from-red-700 to-orange-700 border-t-2 border-white/20 animate-slideDown">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-6 py-4 font-bold text-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-red-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
