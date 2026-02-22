const LocalInfo = () => {
  return (
    <div className="bg-gradient-to-br from-pink-400 via-red-500 to-orange-500 border-4 border-orange-500 w-[30%] h-2/5 absolute top-[30%] left-[1%] hidden md:block rounded-xl shadow-2xl shadow-orange-500/50 overflow-hidden group">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-yellow-300 z-10"></div>
      <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-yellow-300 z-10"></div>
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-yellow-300 z-10"></div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-yellow-300 z-10"></div>
      
      <a 
        href="#"
        onClick={(event) => event.preventDefault()}
        className="block w-full h-full relative"
      >
        <img 
          src="/maps copy.png" 
          alt="Location Map" 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          <span className="text-white text-2xl font-bold drop-shadow-lg">📍 View on Maps</span>
        </div>
      </a>
    </div>
  );
};

export default LocalInfo;
