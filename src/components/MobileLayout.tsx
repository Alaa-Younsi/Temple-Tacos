import { useState } from 'react';
import Menu from './Menu';
import Service from './Service';
import Contact from './Contact';
import Info from './Info';

const MobileLayout = () => {
  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'service', label: 'Service' },
    { id: 'contact', label: 'Contact' },
    { id: 'info', label: 'Info' },
  ];

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
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Mobile Header */}
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 p-4 border-b-4 border-red-600 shadow-lg">
        <div className="flex items-center gap-4">
          <img 
            src="/icon.png" 
            alt="Temple Tacos Logo" 
            className="w-16 h-16 object-contain border-4 border-red-600 rounded-full bg-white p-1"
          />
          <div>
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">Temple Tacos</h1>
            <p className="text-white/90 font-semibold">Taco Place</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b-4 border-red-700 bg-gradient-to-r from-red-600 to-orange-600">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-2 font-bold text-sm transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-white text-red-600 border-b-4 border-yellow-400'
                : 'text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar bg-white -mt-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default MobileLayout;
