import React from 'react';

const Book = () => {
  return (
    
    <div className='w-full py-16 bg-white flex flex-col items-center justify-center gap-8 px-4'>
      
      
      <div className='w-full max-w-4xl bg-black text-white py-6 px-4 rounded-2xl text-center shadow-lg'>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-extrabold tracking-wide'>
          How to book your tickets online & offline
        </h1>
      </div>

     
      <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-2'>
        
       
        <button className='w-64 sm:w-72 h-14 bg-black text-white text-lg font-bold rounded-full flex items-center justify-center gap-3 hover:bg-green-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
          <i className='fa-solid fa-globe text-xl'></i>
          Online Booking
        </button>
        
        
        <button className='w-64 sm:w-72 h-14 bg-green-500 text-white text-lg font-bold rounded-full flex items-center justify-center gap-3 hover:bg-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
          <i className='fa-solid fa-phone text-xl'></i>
          Call Now
        </button>

      </div>
      
    </div>
  );
};

export default Book;