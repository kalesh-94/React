import React from 'react';

const getRandomBinaryBlock = () => {
  return Array.from({ length: 4 }, () =>
    Math.random() > 0.5 ? '1' : '0'
  ).join('');
};

const colorPalette = [
  'text-blue-300',
  'text-purple-300',
  'text-red-300',
  'text-pink-300',
  'text-indigo-300',
  'text-cyan-300',
];

const BinaryGridBackground = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0d0d0d] overflow-hidden font-mono">

      {/* Binary Grid Blocks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
          const opacity = (Math.random() * 0.12 + 0.02).toFixed(2); // 0.02 to 0.14

          return (
            <div
              key={i}
              className={`
                absolute 
                text-xs 
                whitespace-pre 
                leading-4 
                ${randomColor}
                transition-transform 
                duration-300 
                ease-in-out 
                hover:scale-105 
                hover:brightness-150 
                cursor-default
              `}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${0.8 + Math.random() * 0.6})`,
                fontSize: '10px',
                letterSpacing: '0.1rem',
                opacity,
              }}
            >
              {Array.from({ length: 5 })
                .map(() => getRandomBinaryBlock())
                .join('\n')}
            </div>
          );
        })}
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 bg-black bg-opacity-40 backdrop-blur-sm">
        <div className="text-white text-lg font-semibold tracking-wide">Kalesh's Portfolio</div>
        <ul className="flex space-x-6 text-sm text-white/90">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 px-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
         Kalesh Uttam Patil AIML Engineer 
        </h1>
        <p className="text-white mt-4 max-w-xl text-sm md:text-base">
          The world is powered by open source software. It is a hidden cornerstone of modern civilization, and the shared heritage of all humanity.
        </p>
        <button className="mt-8 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
          View resume
        </button>
      </main>
    </div>
  );
};

export default BinaryGridBackground;
