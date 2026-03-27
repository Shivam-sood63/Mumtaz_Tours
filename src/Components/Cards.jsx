import React from 'react';

const Cards = () => {
  
  const servicesData = [
    { id: 1, icon: 'fa-plane', title: 'Custom Tours', desc: 'For you and your family', bg: 'bg-black' },
    { id: 2, icon: 'fa-handshake', title: 'Corporate Trips', desc: 'For your business team', bg: 'bg-green-500' },
    { id: 3, icon: 'fa-sun', title: 'Summer Special', desc: 'Enjoy the sunny beaches', bg: 'bg-black' },
    { id: 4, icon: 'fa-star', title: 'Luxury Tours', desc: 'Premium experience', bg: 'bg-green-500' },
    { id: 5, icon: 'fa-phone', title: '24/7 Support', desc: 'Always here to help', bg: 'bg-black' },
    { id: 6, icon: 'fa-cart-flatbed-suitcase', title: 'Luggage Care', desc: 'Safe and secure', bg: 'bg-green-500' },
  ];

  return (
   
    <div className='w-full py-12 flex flex-wrap items-center justify-center gap-6 px-4'>
      
      {servicesData.map((service) => (
        <div 
          key={service.id} 
          
          className={`w-40 h-40 ${service.bg} flex flex-col items-center justify-center text-white shadow-xl rounded-full text-center p-4 hover:bg-red-600 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500 transition-all duration-300 cursor-pointer`}
        >
         
          <span className='text-3xl mb-2'>
            <i className={`fa-solid ${service.icon}`}></i>
          </span>
          
          <h1 className='text-sm font-bold'>{service.title}</h1>
          
          <p className='text-[10px] mt-1 opacity-90 leading-tight'>
            {service.desc}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Cards;