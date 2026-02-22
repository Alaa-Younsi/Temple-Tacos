const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo with glow effect */}
        <div className="mb-8 animate-pulse">
          <img 
            src="/icon.png" 
            alt="Temple Tacos Logo" 
            className="w-32 md:w-40 h-auto mx-auto drop-shadow-[0_0_50px_rgba(239,68,68,0.8)]"
          />
        </div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent animate-fadeIn">
          Temple Tacos
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wider animate-slideUp">
          Taco Place
        </p>
        
        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
