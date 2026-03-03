import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-24 pb-12 border-t border-navy-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div className="text-3xl font-serif font-bold tracking-wider flex items-center gap-2 mb-4">
            <span className="text-pink-500">✦</span> GoldrushAi
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Technology solutions you can trust. Transforming businesses through intelligent automation.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-medium mb-6">Services</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><span className="hover:text-pink-500 transition-colors cursor-pointer">Advisory & Consulting</span></li>
            <li><span className="hover:text-pink-500 transition-colors cursor-pointer">Intelligent Automation</span></li>
            <li><span className="hover:text-pink-500 transition-colors cursor-pointer">Chatbot Engineering</span></li>
            <li><span className="hover:text-pink-500 transition-colors cursor-pointer">Data-Driven Marketing</span></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-xl font-medium mb-6">Useful links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><span className="hover:text-pink-500 transition-colors cursor-pointer">Privacy policy</span></li>
            <li><span className="hover:text-pink-500 transition-colors cursor-pointer">Contact us</span></li>
          </ul>
        </div>

        {/* Badges/Certifications */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center mb-4 border-4 border-yellow-400">
            <div className="text-center">
              <div className="text-navy-900 font-bold text-xs">FOUNDER</div>
              <div className="text-navy-900 font-bold text-xl">100</div>
            </div>
          </div>
          <div className="border border-white p-2 text-center text-xs">
            <div className="font-bold text-lg">TECH</div>
            <div>SOUTH WEST</div>
            <div className="font-bold">+ MEMBER</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} GoldrushAi Solutions. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built by GoldrushAi Team</p>
      </div>
    </footer>
  );
};

export default Footer;
