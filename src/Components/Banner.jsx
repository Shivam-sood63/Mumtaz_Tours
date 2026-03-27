import React from 'react';
import landImg from '../assets/land.jpg'; 

const Banner = () => {
  return (
    
    <div
      className='relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${landImg})` }}
    >
     
      <div className='absolute inset-0 bg-black/50'></div>

      
      <div className='relative z-10 px-4 flex flex-col items-center justify-center gap-4'>
        
        <h1 className='text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg'>
          <span className='text-green-500 text-3xl sm:text-4xl md:text-6xl block mb-2 md:inline md:mb-0'>
            WELCOME
          </span>{' '}
          <br className='hidden md:block' />
          TO MUMTAZ TOURS
        </h1>
        
        <p className='text-white text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md mt-2 md:mt-4'>
          Start your journey with us
        </p>
        
        
        <button className='mt-6 px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-white hover:text-green-500 transition-all duration-300 shadow-lg'>
          Explore Packages
        </button>
      </div>
    </div>
  );
};

export default Banner;