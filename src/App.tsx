import { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './components/layout/SplashScreen';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Menu from './components/sections/Menu';
import Service from './components/sections/Service';
import Contact from './components/sections/Contact';
import Info from './components/sections/Info';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('menu');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'menu':
        return <Menu />;
      case 'service':
        return <Service />;
      case 'contact':
        return <Contact />;
      case 'info':
        return <Info />;
      default:
        return <Menu />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header - Desktop only */}
      <Header />
      
      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Area */}
      <main className="w-full pt-16 md:pt-0">
        {renderContent()}
      </main>

      <div className="fixed bottom-6 right-6 z-50 group">
        <div className="flex items-center gap-3">
          <div className="bg-white text-green-600 px-4 py-2 rounded-full shadow-xl font-bold text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            Make an Order!
          </div>
          <div className="w-14 h-14 rounded-full bg-green-500 shadow-2xl flex items-center justify-center border-2 border-white">
            <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M19.11 17.58c-.29-.14-1.7-.84-1.97-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.4-.85-.76-1.42-1.7-1.59-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.82 1.18 3.01.14.19 2.03 3.1 4.91 4.34.68.29 1.2.46 1.61.58.68.22 1.29.19 1.77.12.54-.08 1.7-.69 1.94-1.35.24-.67.24-1.24.17-1.35-.07-.12-.26-.19-.55-.33z"/>
              <path d="M16 3C8.82 3 3 8.64 3 15.6c0 2.23.6 4.33 1.65 6.15L3 29l7.54-1.96a13.2 13.2 0 005.46 1.16c7.18 0 13-5.64 13-12.6S23.18 3 16 3zm0 22.85c-1.78 0-3.45-.48-4.88-1.33l-.35-.21-4.48 1.16 1.2-4.33-.23-.36a10.3 10.3 0 01-1.58-5.18c0-5.68 4.63-10.29 10.32-10.29s10.32 4.61 10.32 10.29-4.63 10.25-10.32 10.25z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-red-900 to-orange-900 text-white py-8 px-4">
        <div className="w-full text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/icon.webp" alt="Temple Tacos" loading="lazy" decoding="async" className="w-12 h-12 rounded-full border-2 border-white shadow-lg" />
            <h3 className="text-2xl font-bold">Temple Tacos</h3>
          </div>
          <p className="text-orange-200 mb-4">Authentic Flavors, Modern Twist</p>
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <a href="tel:0598620000" className="hover:text-orange-400 transition-colors">📞 05 98 62 00 00</a>
            <a href="tel:0698450000" className="hover:text-orange-400 transition-colors">📞 06 98 45 00 00</a>
            <a href="mailto:contact@templetacos.com" className="hover:text-orange-400 transition-colors">✉️ Email Us</a>
          </div>
          <p className="text-orange-200/90 text-sm mb-2">
            Created by{' '}
            <a
              href="https://portfolio-six-pi-28.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors underline underline-offset-2"
            >
              Alaa Younsi
            </a>
          </p>
          <p className="text-orange-300/60 text-sm">© 2024 Temple Tacos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
