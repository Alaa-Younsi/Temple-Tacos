const Info = () => {
  const schedule = [
    { day: 'Saturday', hours: '10:00 AM - 1:00 AM', isSpecial: false },
    { day: 'Sunday', hours: '10:00 AM - 1:00 AM', isSpecial: false },
    { day: 'Monday', hours: '10:00 AM - 1:00 AM', isSpecial: false },
    { day: 'Tuesday', hours: '10:00 AM - 1:00 AM', isSpecial: false },
    { day: 'Wednesday', hours: '10:00 AM - 1:00 AM', isSpecial: false },
    { day: 'Thursday', hours: '10:00 AM - 1:00 AM', isSpecial: false },
    { day: 'Friday', hours: '2:00 PM - 1:00 AM', isSpecial: true },
  ];

  const features = [
    { icon: '🍽️', title: 'Dine-In', description: 'Comfortable seating available' },
    { icon: '🥡', title: 'Takeaway', description: 'Quick pickup service' },
    { icon: '🚗', title: 'Delivery', description: 'Call for delivery options' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', description: 'Perfect for families' },
    { icon: '💳', title: 'Payment', description: 'Cash accepted' },
    { icon: '🌟', title: 'Quality', description: 'Fresh daily ingredients' },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-orange-950 py-12 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
          Information
        </h2>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto">
          Everything you need to know about Temple Tacos
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full"></div>
        </div>
      </div>

      <div className="w-full px-4 space-y-12">
        {/* Opening Hours Section */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6">
            <h3 className="text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
              <span>🕒</span>
              <span>Opening Hours</span>
            </h3>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schedule.map((item, index) => (
                <div 
                  key={index}
                  className={`p-5 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    item.isSpecial 
                      ? 'bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-400 shadow-lg' 
                      : 'bg-gray-50 border-gray-200 hover:border-red-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`font-bold text-lg ${item.isSpecial ? 'text-orange-700' : 'text-gray-800'}`}>
                      {item.day}
                    </span>
                    <span className={`font-semibold ${item.isSpecial ? 'text-orange-600' : 'text-gray-600'}`}>
                      {item.hours}
                    </span>
                  </div>
                  {item.isSpecial && (
                    <p className="text-sm text-orange-600 mt-2">⭐ Special hours</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl border-2 border-red-300">
              <p className="text-center text-gray-700 font-semibold">
                💡 <span className="font-bold">Note:</span> We're open late to satisfy your cravings!
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border-2 border-transparent hover:border-red-400"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Location and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
                <span>📍</span>
                <span>Find Us</span>
              </h3>
            </div>
            <div className="p-8">
              <div className="text-center space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">Address</p>
                  <p className="text-2xl font-bold text-gray-800">Temple Tacos</p>
                  <p className="text-xl text-gray-600">Algiers, Algeria</p>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
                  >
                    📍 Get Directions
                  </a>
                </div>

                {/* Image gallery */}
                <div className="grid grid-cols-2 gap-2 mt-6">
                  <img src="/image8.webp" alt="Restaurant" loading="lazy" decoding="async" className="w-full h-32 object-cover rounded-lg shadow-md" />
                  <img src="/image9.webp" alt="Restaurant" loading="lazy" decoding="async" className="w-full h-32 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
                <span>🌐</span>
                <span>Connect With Us</span>
              </h3>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-center text-gray-600 mb-6">
                Follow us for updates, special offers, and delicious food photos!
              </p>

              <a 
                href="#"
                onClick={(event) => event.preventDefault()}
                className="flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-5 rounded-xl font-bold transition-all hover:scale-105 shadow-lg"
              >
                <img src="/instagram.webp" alt="Instagram" loading="lazy" decoding="async" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <div className="flex-1 text-left">
                  <p className="text-sm opacity-90">Follow us on</p>
                  <p className="text-xl font-bold">Instagram</p>
                </div>
                <span className="text-2xl">→</span>
              </a>
              
              <a 
                href="#"
                onClick={(event) => event.preventDefault()}
                className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-5 rounded-xl font-bold transition-all hover:scale-105 shadow-lg"
              >
                <img src="/facebook.webp" alt="Facebook" loading="lazy" decoding="async" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <div className="flex-1 text-left">
                  <p className="text-sm opacity-90">Like us on</p>
                  <p className="text-xl font-bold">Facebook</p>
                </div>
                <span className="text-2xl">→</span>
              </a>

              <div className="pt-4 border-t-2 border-gray-200">
                <p className="text-center text-gray-600 mb-3">Contact us directly</p>
                <div className="space-y-2">
                  <a href="tel:0598620000" className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition-all">
                    📞 05 98 62 00 00
                  </a>
                  <a href="mailto:contact@templetacos.com" className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition-all text-sm break-all px-2">
                    ✉️ contact@templetacos.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-2xl p-8 md:p-12 shadow-2xl text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Why Choose Temple Tacos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-5xl mb-4">🌟</div>
              <h4 className="text-2xl font-bold mb-2">Premium Quality</h4>
              <p className="text-white/90">Fresh ingredients and authentic recipes</p>
            </div>
            <div>
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-2xl font-bold mb-2">Fast Service</h4>
              <p className="text-white/90">Quick preparation without compromising taste</p>
            </div>
            <div>
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-2xl font-bold mb-2">Made with Love</h4>
              <p className="text-white/90">Every dish prepared with care and passion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
