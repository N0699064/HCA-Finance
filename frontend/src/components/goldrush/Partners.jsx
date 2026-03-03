import React from 'react';
import { partners } from '../../data/mockData';

const Partners = () => {
  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Content (Mobile: 1st, Desktop: 3rd/Right) */}
        <div className="lg:col-span-6 order-1 lg:order-3">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-4 mb-4 lg:hidden">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <span className="text-pink-500 font-bold tracking-[0.2em] text-xs uppercase">Best in solutions</span>
          </div>

          <h2 className="text-4xl font-serif font-medium text-navy-900 mb-6">
            Key Technology Partners
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            HCA Finance partners with leading technology vendors to deliver state-of-the-art AI solutions that empower your business. Our partners excel in providing secure, scalable data storage and LLM inference integrated seamlessly with major cloud platforms.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We also collaborate with experts in data management, offering services that include resilience, governance, and compliance, to streamline your operations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our commitment to innovation is showcased through our partnerships with pioneers in generative AI and modern marketing experiences.
          </p>
        </div>

        {/* Separator / Vertical Text (Desktop Only) */}
        <div className="hidden lg:flex lg:col-span-1 lg:order-2 justify-center relative">
          <div className="h-full w-[1px] bg-pink-200 absolute left-1/2"></div>
          <span className="bg-gray-50 py-4 vertical-text text-pink-500 font-bold tracking-[0.2em] text-xs uppercase z-10">Best in solutions</span>
        </div>

        {/* Logos Area */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-8 items-center justify-items-center opacity-70 order-2 lg:order-1">
          {partners.map((partner, i) => (
            <div key={i} className="font-bold text-2xl text-gray-400 hover:text-navy-900 transition-colors cursor-default">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
