import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-4 bg-transparent fixed top-0 left-0 z-10 border-b border-gray-300 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-black italic">GPT-fopla</h1>
      </div>
    </header>
  );
};

export default Header;
