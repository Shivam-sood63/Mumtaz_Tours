import React from "react";

const Footer = () => {
  return (
   
    <footer className="w-full bg-black text-white pt-16 pb-4">
      
     
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
       
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold text-green-500">
            Mumtaz Tours
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit reiciendis voluptatibus nam obcaecati nobis laudantium in magni.
          </p>
         
          <div className="flex items-center gap-5 mt-2">
            <a href="#" className="text-xl text-green-500 hover:text-white transition-colors duration-300"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#" className="text-xl text-green-500 hover:text-white transition-colors duration-300"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-xl text-green-500 hover:text-white transition-colors duration-300"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-xl text-green-500 hover:text-white transition-colors duration-300"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-xl text-green-500 hover:text-white transition-colors duration-300"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>

        
        <div>
          <h2 className="text-green-500 text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors duration-300">About</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Services</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-green-500 text-xl font-bold mb-4">Our Services</h2>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Dubai</a></li>
           
            <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Chicago</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Hong Kong</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Thailand</a></li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-green-500 text-xl font-bold mb-4">Contact Us</h2>
          <ul className="text-gray-400 flex flex-col gap-4">
            <li>
              <a href="#" className="flex items-start gap-3 hover:text-green-500 transition-colors duration-300">
                <i className="fa-solid fa-location-arrow text-green-500 mt-1"></i>
                <span>Muzaffarnagar, Uttar Pradesh</span>
              </a>
            </li>
            <li>
              <a href="tel:+918899445533" className="flex items-center gap-3 hover:text-green-500 transition-colors duration-300">
                <i className="fa-solid fa-phone text-green-500"></i>
                <span>+91 8899445533</span>
              </a>
            </li>
            <li>
              <a href="mailto:Shriram@gmail.com" className="flex items-center gap-3 hover:text-green-500 transition-colors duration-300">
                <i className="fa-regular fa-envelope text-green-500"></i>
                <span>Shriram@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      
      <div className="w-full mt-12 border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-500 text-xs tracking-wide">
          © {new Date().getFullYear()} Mumtaz Tours. Site designed and developed by Shivam Sood.
        </p>
      </div>

    </footer>
  );
};

export default Footer;