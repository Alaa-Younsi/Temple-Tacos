const Header = () => {
  return (
    <header className="hidden md:block relative bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 py-16 overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full px-8 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="/icon.webp" 
              alt="Temple Tacos Logo"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className="relative w-32 h-32 object-contain rounded-full border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-7xl font-black bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
              Temple Tacos
            </h1>
            <p className="text-3xl text-orange-200 font-bold tracking-widest">Taco Place</p>
            <p className="text-lg text-orange-300/80 italic">Authentic Flavors, Modern Twist</p>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition-all shadow-xl">
            <p className="text-orange-200 text-sm font-semibold">🕒 Open Now</p>
            <p className="text-white text-xl font-bold">10:00 AM - 1:00 AM</p>
          </div>
          
          <a 
            href="tel:0598620000"
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-xl px-6 py-4 transition-all shadow-xl hover:scale-105"
          >
            <p className="text-orange-100 text-sm font-semibold">📞 Call Us</p>
            <p className="text-white text-xl font-bold">05 98 62 00 00</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
