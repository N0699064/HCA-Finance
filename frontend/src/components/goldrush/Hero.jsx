import React from 'react';
import { ArrowRight, Bot, Cpu, Workflow } from 'lucide-react';

const Hero = ({ onContactClick, onAboutClick }) => {
  return (
    <section className="relative bg-navy-900 text-white min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-tight mb-6">
            AI solutions that <br />
            <span className="font-bold">scale success</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
            We are GoldrushAi. With cutting-edge artificial intelligence and automation strategies, we navigate your marketing challenges and deliver gold-standard results.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onContactClick}
              className="bg-white text-navy-900 px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              Start your journey
              <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={onAboutClick}
              className="px-8 py-3.5 rounded-full font-bold border border-gray-500 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 flex items-center gap-2"
            >
              Meet the team
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative hidden lg:block h-[500px]">
          <div className="absolute top-0 right-10 bg-pink-200 w-64 h-64 rounded-3xl transform rotate-3 flex items-center justify-center shadow-2xl animate-float">
            <Bot size={80} className="text-pink-600 opacity-80" strokeWidth={1.5} />
          </div>

          <div className="absolute bottom-10 right-32 bg-blue-100 w-64 h-64 rounded-3xl transform -rotate-3 flex items-center justify-center shadow-2xl animate-float-mid">
            <Cpu size={80} className="text-navy-900 opacity-80" strokeWidth={1.5} />
          </div>

          <div className="absolute top-40 right-64 bg-navy-800 w-64 h-64 rounded-3xl transform rotate-6 flex items-center justify-center shadow-2xl border border-navy-700 animate-float-slow">
            <Workflow size={80} className="text-white opacity-80" strokeWidth={1.5} />
          </div>

          {/* Center Logo Circle */}
          <div className="absolute top-1/2 right-48 transform -translate-y-1/2 translate-x-1/2 bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-xl z-20">
            <span className="text-navy-900 font-serif font-bold text-3xl">GAi</span>
          </div>
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[100px] lg:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
