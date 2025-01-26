import { useState } from 'react';

function App() {
  return (
    <>
      <nav className="flex items-center justify-between bg-black p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo-2LzXSqsyE-transformed.png" 
            alt="logo"
            className="h-8 w-8 object-cover rounded-full border-2 border-yellow-500"
          />
          <div className="text-yellow-500 text-lg font-bold ">Rely</div>
        </div>

        {/* Button */}
        <button className="bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-black px-4 py-2 rounded-lg font-medium shadow-lg transition-all">
          New Chat
        </button>
      </nav>
    </>
  );
}

export default App;
