import React from 'react';

const Whyus = () => {
  
  const features = [
    {
      id: 1,
      icon: 'fa-star', 
      title: 'Premium Quality',
      desc: 'We partner with top-rated hotels and airlines to ensure a comfortable and luxurious journey for you.'
    },
    {
      id: 2,
      icon: 'fa-headset',
      title: '24/7 Support',
      desc: 'Our dedicated team is always available to assist you at every step of your trip, anytime, anywhere.'
    },
    {
      id: 3,
      icon: 'fa-wallet',
      title: 'Best Prices',
      desc: 'We offer highly competitive pricing and flexible packages without compromising on quality.'
    },
    {
      id: 4,
      icon: 'fa-plane-departure',
      title: 'Direct Flights',
      desc: 'Enjoy hassle-free travel with direct flights to your destinations via premium airlines like Saudia.'
    },
    {
      id: 5,
      icon: 'fa-shield-halved',
      title: 'Safe & Secure',
      desc: 'Your safety is our priority. We ensure secure bookings, reliable transport, and safe ground services.'
    },
    {
      id: 6,
      icon: 'fa-users',
      title: 'Family Friendly',
      desc: 'Specialized tour packages designed keeping family comfort, children, and elders in mind.'
    }
  ];

  return (
    
    <div className='w-full py-20 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        
       
        <div className='text-center mb-16'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4'>
            Why Choose Us
          </h1>
          
          <div className='w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-6'></div>
          
          <h2 className='text-lg md:text-xl font-medium text-gray-500 max-w-2xl mx-auto px-4'>
            What we provide for you and your family to make your journey peaceful and memorable.
          </h2>
        </div>

        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
          
          {features.map((feature) => (
            <div 
              key={feature.id} 
              
              className='group flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 ease-in-out hover:-translate-y-2 border border-transparent hover:border-green-100 cursor-pointer'
            >
             
              <div className='w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300 shadow-inner'>
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              
              
              <h3 className='text-xl font-extrabold text-gray-900 mb-3 group-hover:text-green-500 transition-colors duration-300'>
                {feature.title}
              </h3>
              
              
              <p className='text-gray-500 leading-relaxed text-sm md:text-base px-2'>
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Whyus;