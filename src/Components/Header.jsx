const Header = () => {
  return (
    <header className="w-full h-16 bg-gray-900 rounded-b-2xl">
      <div className="h-full w-full flex flex-row">
        <div className="flex-1 flex"></div>
        <div className="flex-1 flex justify-center items-center">
          <span className="inline-block w-5 h-2 bg-orange-500 mx-2 rounded"></span>
          <h1 className="font-morabba-bold text-3xl text-white">
            کوییــــــز اپ
          </h1>
          <span className="inline-block w-5 h-2 bg-orange-500 mx-2 rounded"></span>
        </div>
        <div className="flex-1 flex"></div>
      </div>
    </header>
  );
};

export default Header;
