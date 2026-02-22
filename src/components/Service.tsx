const Service = () => {
  const services = [
    {
      image: '/image1.png',
      title: 'Tacos',
      description: 'Delicious tacos with various fillings'
    },
    {
      image: '/image3.png',
      title: 'Special Meals',
      description: 'Our signature dishes'
    },
    {
      image: '/image4.png',
      title: 'Fresh Ingredients',
      description: 'Always fresh, always tasty'
    },
    {
      image: '/image5.png',
      title: 'Fast Service',
      description: 'Quick and efficient'
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 border-4 border-orange-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/90">{service.description}</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4">
              <h3 className="text-xl font-bold text-white text-center">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
