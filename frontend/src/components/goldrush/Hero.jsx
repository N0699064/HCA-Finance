import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-navy-900 text-white min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-tight mb-6">
            Capital funding that <span className="font-bold">fuels growth</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
            We are HCA Finance. With smart bank financing and transparent funding solutions, we help small and medium businesses access the capital they need to scale with confidence.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-navy-900 px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              Get funded today
              <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-3.5 rounded-full font-bold border border-gray-500 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 flex items-center gap-2"
            >
              About us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Floating Image Cards — shifted right */}
        <div className="relative hidden lg:block h-[500px] ml-12">
          {/* Card 1 - Top right */}
          <div className="absolute top-0 right-[-20px] w-64 h-64 rounded-3xl transform rotate-3 shadow-2xl animate-float overflow-hidden">
            <img
              src="/sba funding.jpg"
              alt="Business professionals discussing funding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent"></div>
          </div>

          {/* Card 2 - Bottom center */}
          <div className="absolute bottom-10 right-8 w-64 h-64 rounded-3xl transform -rotate-3 shadow-2xl animate-float-mid overflow-hidden">
            <img
              src="/budget-concept-financial-planning-corporate.jpg"
              alt="People reviewing financial documents and capital"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
          </div>

          {/* Card 3 - Middle left */}
          <div className="absolute top-36 left-0 w-64 h-64 rounded-3xl transform rotate-6 shadow-2xl border border-navy-700 animate-float-slow overflow-hidden">
            <img
              src="/mca-retail.jpg"
              alt="Entrepreneurs celebrating successful capital funding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-xl z-20">
            <span className="text-navy-900 font-serif font-bold text-3xl">HCA</span>
          </div>
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[100px] lg:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', marginBottom: '-1px' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
