const Header = () => {
  return (
    <div className="absolute top-5 left-2.5 w-[30%] h-1/4 border-4 border-red-500 bg-gradient-to-br from-gray-900 to-black md:flex md:items-center md:justify-center hidden shadow-2xl shadow-red-500/50 rounded-xl overflow-hidden group">
      {/* Simple corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-400"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-400"></div>
      
      <img 
        src="/icon.png" 
        alt="Temple Tacos Logo"
        className="w-1/3 h-full rounded-full mx-4 object-cover border-4 border-red-600 shadow-lg shadow-red-600/50 group-hover:scale-105 transition-transform duration-300 relative z-10"
      />
      <div className="text-center relative z-10">
        <h1 className="text-5xl xl:text-7xl font-black italic mt-4 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">Temple Tacos</h1>
        <p className="text-2xl xl:text-4xl mt-2 text-white font-bold tracking-wider">Taco Place</p>
      </div>
    </div>
  )
}

export default Header