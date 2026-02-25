const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Logo with advanced animations */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 animate-ping opacity-20">
            <img 
              src="/icon.webp" 
              alt="Temple Tacos Logo" 
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className="w-32 md:w-48 h-auto mx-auto"
            />
          </div>
          <img 
            src="/icon.webp" 
            alt="Temple Tacos Logo" 
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="relative w-32 md:w-48 h-auto mx-auto animate-float drop-shadow-[0_0_80px_rgba(239,68,68,0.9)]"
          />
        </div>
        
        {/* Title with gradient animation */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fadeIn tracking-tight">
          <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
            Temple Tacos
          </span>
        </h1>
        
        {/* Subtitle with slide animation */}
        <div className="animate-slideUp space-y-2 mb-8">
          <p className="text-3xl md:text-4xl text-orange-200 font-bold tracking-widest">
            Taco Place
          </p>
          <p className="text-xl md:text-2xl text-orange-300/80 font-light italic">
            Authentic Flavors, Modern Twist
          </p>
        </div>
        
        {/* Loading animation */}
        <div className="flex justify-center gap-3 mt-12">
          <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce shadow-lg shadow-red-500/50" style={{ animationDelay: '0s' }}></div>
          <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-bounce shadow-lg shadow-orange-500/50" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full animate-bounce shadow-lg shadow-yellow-500/50" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 1.2s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
