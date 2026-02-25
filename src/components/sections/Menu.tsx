const Menu = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-orange-950 py-12 px-4 md:px-8">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
          Our Menu
        </h2>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto">
          Discover our delicious selection of tacos, meals, and specialties
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-600 to-red-600 rounded-full"></div>
        </div>
      </div>

      {/* Main Menu Image */}
      <div className="w-full mb-12 px-4">
        <div className="relative group max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative">
            <img 
              src="/menu.webp" 
              alt="Menu" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <p className="text-white text-2xl font-bold">Click to enlarge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="w-full px-4">
        <h3 className="text-4xl font-bold text-center mb-8 text-orange-200">
          Featured Dishes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[3, 4, 5, 6, 7, 8, 9, 12].map((num) => (
            <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={`/image${num}.webp`}
                  alt={`Dish ${num}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="text-center">
                  <p className="text-white font-bold text-lg">Delicious</p>
                  <div className="flex gap-1 justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full mt-16 px-4 md:px-8">
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Order?</h3>
          <p className="text-white/90 text-lg mb-6">Call us now or visit our restaurant!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0598620000"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              📞 Call Now
            </a>
            <a 
              href="#"
              onClick={(event) => event.preventDefault()}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
