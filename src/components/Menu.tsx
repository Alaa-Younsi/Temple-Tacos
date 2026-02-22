const Menu = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
        Our Menu
      </h2>
      <div className="flex justify-center">
        <img 
          src="/menu.png" 
          alt="Menu" 
          className="max-w-full h-auto rounded-xl shadow-2xl border-4 border-red-500"
        />
      </div>
    </div>
  );
};

export default Menu;
