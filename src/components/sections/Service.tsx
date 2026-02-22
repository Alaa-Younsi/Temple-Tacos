const Service = () => {
  const services = [
    {
      image: '/image1.png',
      title: 'Premium Tacos',
      description: 'Authentic Mexican tacos with a unique twist',
      features: ['Fresh ingredients', 'Multiple varieties', 'Signature sauces']
    },
    {
      image: '/image3.png',
      title: 'Special Combos',
      description: 'Complete meals that satisfy your cravings',
      features: ['Best value', 'Large portions', 'Popular choice']
    },
    {
      image: '/image4.png',
      title: 'Fresh Daily',
      description: 'We prepare everything fresh every day',
      features: ['No preservatives', 'Quality guaranteed', 'Made to order']
    },
    {
      image: '/image5.png',
      title: 'Fast Service',
      description: 'Quick preparation without compromising quality',
      features: ['Express orders', 'Efficient team', 'No long waits']
    },
    {
      image: '/image6.jpg',
      title: 'Dine In',
      description: 'Comfortable seating and great ambiance',
      features: ['Modern interior', 'Family friendly', 'Clean space']
    },
    {
      image: '/image7.png',
      title: 'Takeaway',
      description: 'Perfect packaging for on-the-go meals',
      features: ['Easy pickup', 'Stays hot', 'Eco-friendly']
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-orange-950 to-red-950 py-12 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto">
          Experience excellence in every bite with our premium services
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ Popular
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Button */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-xl font-bold hover:from-red-700 hover:to-orange-700 transition-all shadow-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-br-full"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="w-full mt-16 px-4 md:px-8">
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Experience Our Services Today!
        </h3>
        <p className="text-white/90 text-lg mb-8">
          Visit us or call for delivery and takeaway
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:0598620000"
            className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
            <span>📞</span>
            <span>05 98 62 00 00</span>
          </a>
          <a 
            href="tel:0698450000"
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
            <span>📞</span>
            <span>06 98 45 00 00</span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
