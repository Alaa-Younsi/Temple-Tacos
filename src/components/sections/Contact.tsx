const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-orange-200 max-w-2xl mx-auto">
            We're here to serve you! Reach out for orders or inquiries
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Phone Numbers Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-orange-200">Available during business hours</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="tel:0598620000" 
                className="block bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-center py-4 px-6 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="block text-sm text-orange-200 mb-1">Primary Line</span>
                📞 05 98 62 00 00
              </a>
              <a 
                href="tel:0698450000" 
                className="block bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-center py-4 px-6 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="block text-sm text-orange-200 mb-1">Secondary Line</span>
                📞 06 98 45 00 00
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-orange-200">For special requests and catering</p>
            </div>
            
            <a 
              href="mailto:contact@templetacos.com"
              className="block bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-center py-6 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg break-all"
            >
              <span className="block text-sm text-orange-200 mb-2">Send us an email</span>
              ✉️ contact@templetacos.com
            </a>
          </div>

          {/* Social Media Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Follow Us</h3>
              <p className="text-orange-200">Stay updated with our latest</p>
            </div>

            <div className="space-y-4">
              <a 
                href="#"
                onClick={(event) => event.preventDefault()}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <img src="/instagram.webp" alt="Instagram" loading="lazy" decoding="async" className="w-6 h-6 rounded-full" />
                <span>Instagram</span>
              </a>
              
              <a 
                href="#"
                onClick={(event) => event.preventDefault()}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <img src="/facebook.webp" alt="Facebook" loading="lazy" decoding="async" className="w-6 h-6 rounded-full" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map and Location Section */}
        <div className="w-full px-4">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-6 bg-gradient-to-r from-red-600/50 to-orange-600/50">
              <h3 className="text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
                <span>📍</span>
                <span>Visit Our Location</span>
              </h3>
              <p className="text-center text-orange-100 mt-2">Temple Tacos, Algiers</p>
            </div>
            
            <a 
              href="#"
              onClick={(event) => event.preventDefault()}
              className="block relative group"
            >
              <img 
                src="/maps copy.webp" 
                alt="Location Map" 
                loading="lazy"
                decoding="async"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-12">
                <div className="text-center">
                  <p className="text-white text-2xl font-bold mb-4">Open in Google Maps</p>
                  <div className="bg-white text-red-600 px-8 py-3 rounded-full font-bold inline-block">
                    Get Directions →
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <p className="text-orange-200 text-xl mb-4">Ready to order?</p>
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-110 transition-all duration-300">
              Order Now 🌮
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
