import React from 'react';
import Dubai from '../assets/Dubai.jpg';
import Thailand from '../assets/Thailand.jpg';
import Chicago from '../assets/Cecago.jpg';

const Places = () => {
  
  const destinations = [
    {
      id: 1,
      name: 'Dubai',
      image: Dubai,
      description: 'Experience the ultimate luxury, towering skyscrapers, and thrilling desert safaris in the heart of the UAE.',
    },
    {
      id: 2,
      name: 'Thailand',
      image: Thailand,
      description: 'Discover pristine beaches, vibrant street life, and magnificent temples in the Land of Smiles.',
    },
    {
      id: 3,
      name: 'Chicago',
      image: Chicago,
      description: 'Explore the stunning architecture, beautiful lakes, and vibrant city life in the Windy City.',
    }
  ];

  return (
    
    <div className='w-full py-16 px-4 bg-gray-50'>
      
     
      <div className='mb-12 text-center'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900'>Where you want to go</h1>
        <div className='w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full'></div>
      </div>

      
      <div className='max-w-7xl mx-auto flex flex-wrap items-stretch justify-center gap-10'>
        
        {destinations.map((place) => (
          
          <div 
            key={place.id} 
            className='w-full sm:w-80 md:w-88 flex flex-col group cursor-pointer'
          >
            
            <div className='overflow-hidden rounded-2xl shadow-lg shadow-green-500/20 mb-5 relative'>
              <img 
                src={place.image} 
                alt={`${place.name} Tour Package`} 
                
                className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out' 
              />
              
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500'></div>
            </div>
            
            <h2 className='text-center text-green-500 font-bold text-2xl mb-2 group-hover:text-black transition-colors duration-300'>
              {place.name}
            </h2>
            
            
            <p className='text-gray-600 text-center text-sm md:text-base flex-grow px-2'>
              {place.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Places;