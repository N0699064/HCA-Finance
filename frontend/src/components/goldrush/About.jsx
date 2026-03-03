import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = ({ onAboutClick }) => {
  return (
    <section className="bg-white py-24 relative">
      <div className="container mx-auto px-6 flex">
        {/* Sidebar Text (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-center mr-16">
          <div className="h-24 w-[1px] bg-pink-300 mb-4"></div>
          <span className="vertical-text text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Industry Experts</span>
          <div className="h-full w-[1px] bg-gray-100 mt-4"></div>
        </div>

        <div className="max-w-3xl">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-4 mb-4 lg:hidden">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <span className="text-pink-500 font-bold tracking-[0.2em] text-xs uppercase">Industry Experts</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-8">
            About GoldrushAi
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We blend expert knowledge with a track record of innovative results to help your business cross the unchartered waters of AI adoption. From building a pioneering digital strategy through to implementing dependable automations, we can be the trusted technology partner for your business.
          </p>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            We aren&apos;t just a consultancy. Instead, GoldrushAi can help you on your technology journey from start to finish, and beyond, through our unique proposition of Strategy, Execution, and Optimization.
          </p>

          <button
            onClick={onAboutClick}
            className="bg-navy-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center gap-2 group shadow-lg"
          >
            Meet the team
            <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
