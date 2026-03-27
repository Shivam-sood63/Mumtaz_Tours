import React from "react";

const Deals = () => {
  const packageData = [
    { id: 1, name: "Economy", price: "₹90,990", hotel: "Rawafed Al Asimah", service: "Shuttle Service", isGreenTitle: true },
    { id: 2, name: "Semi Deluxe", price: "₹90,990", hotel: "Rawafed Al Asimah", service: "Shuttle Service", isGreenTitle: false },
    { id: 3, name: "Deluxe", price: "₹90,990", hotel: "Rawafed Al Asimah", service: "Shuttle Service", isGreenTitle: true },
    { id: 4, name: "Gold", price: "₹90,990", hotel: "Rawafed Al Asimah", service: "Shuttle Service", isGreenTitle: false },
    { id: 5, name: "Diamond", price: "₹90,990", hotel: "Rawafed Al Asimah", service: "Shuttle Service", isGreenTitle: true },
  ];

  return (
    <div className="w-full py-16 bg-gray-50 overflow-hidden">
      
      
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Mumtaz Tour Packages</h1>
        <p className="text-gray-500 font-medium text-sm md:text-base">
          21 Days Journey | Saudia Airlines (Direct) | Full Service
        </p>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          
          {packageData.map((pkg) => (
            <div 
              key={pkg.id} 
             
              className="w-full bg-white text-center py-8 px-3 rounded-xl shadow-lg shadow-green-500/10 hover:bg-black hover:text-white transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/40 cursor-pointer flex flex-col gap-1"
            >
              <h2 className={`text-xl font-bold ${pkg.isGreenTitle ? 'text-green-500' : ''}`}>
                {pkg.name}
              </h2>
              
              <p className="text-lg font-semibold mt-1">{pkg.price}</p>
              <p className="text-[10px] text-gray-400 mb-3">| Per Person |</p>
              
              <div className="mt-auto">
                <p className="font-extrabold text-sm text-green-500 mb-1">
                  Makkah Hotel
                </p>
                <p className="font-bold text-xs">{pkg.hotel}</p>
                <p className="font-bold text-xs opacity-90">{pkg.service}</p>
              </div>
              
              <button className="mt-5 px-4 py-2 text-sm border-2 border-green-500 text-green-500 rounded-full font-bold hover:bg-green-500 hover:text-white transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}

        </div>
      </div>
      
    </div>
  );
};

export default Deals;