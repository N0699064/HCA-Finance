import React, { useEffect } from 'react';
import { ArrowRight, Users, MessageSquare, Play } from 'lucide-react';

const AboutPage = ({ onBack, onContactClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Meet the Team Hero Section */}
      <section className="bg-[#F1F4F9] py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="relative inline-block">
              <span className="absolute -top-10 -right-8 text-pink-500 font-serif italic text-xl transform -rotate-12 select-none animate-pulse">
                *Award Winning
                <svg className="absolute -bottom-2 -left-4 w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12C4 12 10 12 14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h1 className="text-5xl lg:text-8xl font-serif font-medium text-navy-900 leading-tight mb-8">
                Meet the team
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              We are specialists in AI-driven marketing and automation solutions, having worked across a multitude of industry sectors with a focus on gold-standard execution.
            </p>
            <button
              onClick={onContactClick}
              className="bg-navy-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center gap-2 group shadow-lg"
            >
              Contact us
              <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-80 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-20 -left-10 w-24 h-32 bg-pink-300 rounded-t-full transform -rotate-12 shadow-xl opacity-80"></div>
                <div className="absolute -bottom-10 -right-10 w-24 h-32 bg-indigo-300 rounded-t-full transform rotate-12 shadow-xl opacity-80"></div>
                <div className="w-24 h-32 bg-blue-400 rounded-t-full shadow-2xl z-10 relative"></div>
                <div className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-navy-900 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-1 h-1 bg-navy-900 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Industry Specialists Section */}
      <section className="bg-white py-24 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-serif font-medium text-navy-900 mb-8">
              Industry Specialists
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At GoldrushAi, we are specialists in technology solutions. With deep roots in marketing automation and the latest AI architectures, we understand exactly how to navigate the toughest digital challenges.
              </p>
              <p>
                With our team of like-minded technologists and global partners, GoldrushAi can champion your technical success while you achieve your business goals. From building an innovative digital strategy to implementing dependable AI workflows, we can be the trusted technology partner for your business.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-navy-900 rounded-3xl overflow-hidden relative shadow-2xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="Team Office" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-6 text-white font-medium">
                Welcome to GoldrushAi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experts List */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-pink-300"></div>
              <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Industry Experts</span>
              <div className="h-[1px] w-12 bg-pink-300"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif font-medium text-navy-900">
              Some of our industry experts
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="max-w-xs w-full text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] bg-blue-500 flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent"></div>
                <div className="w-48 h-64 bg-white/20 rounded-t-full mb-[-20px] shadow-inner flex items-center justify-center">
                  <Users size={80} className="text-white/40" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-1 group-hover:text-pink-500 transition-colors">Jeff Conrad</h3>
              <p className="text-gray-500 font-medium">Founder & AI Strategist</p>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://www.linkedin.com/in/jeff-conrad-2b7b11195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 hover:text-pink-500 transition-colors"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F1F4F9] py-24 mx-6 lg:mx-24 rounded-[40px] mb-24 overflow-hidden">
        <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-white rounded-full opacity-50 transform rotate-12 scale-125"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-pink-500 p-8 rounded-3xl shadow-2xl transform -rotate-6">
                  <MessageSquare size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-8">
              Uniquely positioned to help you scale
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>Whether you need a dedicated AI partner or temporary strategic leadership, GoldrushAi is here to guide your technology journey.</p>
              <button
                onClick={onContactClick}
                className="bg-navy-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center gap-2 group shadow-lg"
              >
                Contact us
                <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-6 mb-24">
        <button onClick={onBack} className="text-pink-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          <ArrowRight size={20} className="rotate-180" /> Back to home
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
