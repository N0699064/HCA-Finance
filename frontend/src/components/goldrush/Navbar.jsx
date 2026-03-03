import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, ChevronUp } from 'lucide-react';

const Navbar = ({ isHome, onHome, onServiceClick, onAboutClick, onInsightsClick, onContactClick, onSbaEligibility }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleMobileNav = (id, type) => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
    if (type === 'service') onServiceClick(id);
    if (type === 'about') onAboutClick();
    if (type === 'home') onHome();
    if (type === 'insights') onInsightsClick();
    if (type === 'contact') onContactClick();
    if (type === 'sba') onSbaEligibility();
  };

  const navBgClass = mobileMenuOpen
    ? 'bg-navy-900'
    : isHome
      ? (isScrolled ? 'bg-navy-900 shadow-lg py-5' : 'bg-transparent py-8')
      : 'bg-white shadow-sm py-5';

  const textColorClass = isHome || mobileMenuOpen ? 'text-white' : 'text-navy-900';
  const logoColorClass = isHome || mobileMenuOpen ? 'text-white' : 'text-navy-900';

  const ctaButtonClass = isHome || mobileMenuOpen
    ? 'bg-white text-navy-900 hover:bg-pink-500 hover:text-white'
    : 'bg-navy-900 text-white hover:bg-pink-500';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${navBgClass}`}>
      <div className={`container mx-auto px-6 lg:px-12 flex justify-between items-center ${textColorClass}`}>
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer z-[110]"
          onClick={() => handleMobileNav('', 'home')}
        >
          <img src={isHome || mobileMenuOpen ? "/logohca-white.svg" : "/logohca.svg"} alt="HCA Finance" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12 font-medium">
          <div className="flex items-center space-x-10">
            <div className="group relative cursor-pointer flex items-center gap-1.5 hover:text-pink-500 transition-colors py-2 text-[15px] tracking-wide">
              Funding Solutions <ChevronDown size={14} className="text-pink-500 mt-0.5" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white text-navy-900 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 p-3">
                <button onClick={() => onServiceClick('lines-of-credit')} className="w-full text-left block px-5 py-3 hover:bg-gray-50 hover:text-pink-500 rounded-lg transition-colors text-[14px]">Lines of Credit</button>
                <button onClick={() => onServiceClick('bank-term-loans')} className="w-full text-left block px-5 py-3 hover:bg-gray-50 hover:text-pink-500 rounded-lg transition-colors text-[14px]">Bank Term Loans</button>
                <button onClick={() => onServiceClick('debt-restructuring')} className="w-full text-left block px-5 py-3 hover:bg-gray-50 hover:text-pink-500 rounded-lg transition-colors text-[14px]">Debt Restructuring</button>
                <button onClick={() => onServiceClick('sba-loans')} className="w-full text-left block px-5 py-3 hover:bg-gray-50 hover:text-pink-500 rounded-lg transition-colors text-[14px]">SBA Loans</button>
                <button onClick={() => onServiceClick('equipment-financing')} className="w-full text-left block px-5 py-3 hover:bg-gray-50 hover:text-pink-500 rounded-lg transition-colors text-[14px]">Equipment Financing</button>
                <button onClick={() => onServiceClick('smarter-mca')} className="w-full text-left block px-5 py-3 hover:bg-gray-50 hover:text-pink-500 rounded-lg transition-colors text-[14px]">Smarter MCA Solution</button>
              </div>
            </div>

            <div className="group relative cursor-pointer flex items-center gap-1.5 hover:text-pink-500 transition-colors py-2 text-[15px] tracking-wide">
              Company <ChevronDown size={14} className="text-pink-500 mt-0.5" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white text-navy-900 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 p-3">
                <button onClick={onAboutClick} className="w-full text-left block px-5 py-3 hover:bg-gray-50 hover:text-pink-500 rounded-lg transition-colors text-[14px]">About Us</button>
              </div>
            </div>

            <button onClick={onInsightsClick} className="hover:text-pink-500 transition-colors text-[15px] tracking-wide py-2">Success Stories</button>
            <button onClick={onSbaEligibility} className="hover:text-pink-500 transition-colors text-[15px] tracking-wide py-2">SBA Eligibility</button>
          </div>

          <button
            onClick={onContactClick}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 group shadow-sm text-[15px] ${ctaButtonClass}`}
          >
            Contact us
            <ArrowRight size={16} className={`${(isHome || mobileMenuOpen) ? 'text-pink-500 group-hover:text-white' : 'text-pink-500'} transition-colors group-hover:translate-x-1 duration-300`} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden z-[110] transition-colors ${textColorClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-navy-900 z-[105] transition-transform duration-500 ease-in-out lg:hidden pt-28 px-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-2">
          <div className="border-b border-navy-800">
            <button
              onClick={() => toggleSection('services')}
              className="w-full py-6 flex justify-between items-center text-xl font-bold text-white hover:text-pink-500 transition-colors"
            >
              Funding Solutions
              {expandedSection === 'services' ? <ChevronUp size={24} className="text-pink-500" /> : <ChevronDown size={24} className="text-pink-500" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'services' ? 'max-h-[400px] mb-4' : 'max-h-0'}`}>
              <div className="bg-navy-800/50 rounded-2xl p-2 space-y-1">
                <button onClick={() => handleMobileNav('lines-of-credit', 'service')} className="w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-navy-800 rounded-xl transition-all">Lines of Credit</button>
                <button onClick={() => handleMobileNav('bank-term-loans', 'service')} className="w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-navy-800 rounded-xl transition-all">Bank Term Loans</button>
                <button onClick={() => handleMobileNav('debt-restructuring', 'service')} className="w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-navy-800 rounded-xl transition-all">Debt Restructuring</button>
                <button onClick={() => handleMobileNav('sba-loans', 'service')} className="w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-navy-800 rounded-xl transition-all">SBA Loans</button>
                <button onClick={() => handleMobileNav('equipment-financing', 'service')} className="w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-navy-800 rounded-xl transition-all">Equipment Financing</button>
                <button onClick={() => handleMobileNav('smarter-mca', 'service')} className="w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-navy-800 rounded-xl transition-all">Smarter MCA Solution</button>
              </div>
            </div>
          </div>

          <div className="border-b border-navy-800">
            <button
              onClick={() => toggleSection('company')}
              className="w-full py-6 flex justify-between items-center text-xl font-bold text-white hover:text-pink-500 transition-colors"
            >
              Company
              {expandedSection === 'company' ? <ChevronUp size={24} className="text-pink-500" /> : <ChevronDown size={24} className="text-pink-500" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'company' ? 'max-h-[300px] mb-4' : 'max-h-0'}`}>
              <div className="bg-navy-800/50 rounded-2xl p-2 space-y-1">
                <button onClick={() => handleMobileNav('', 'about')} className="w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-navy-800 rounded-xl transition-all">About Us</button>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleMobileNav('', 'insights')}
            className="w-full text-left py-6 text-xl font-bold text-white border-b border-navy-800 hover:text-pink-500 transition-colors"
          >
            Success Stories
          </button>

          <button
            onClick={() => handleMobileNav('', 'sba')}
            className="py-6 text-xl font-bold text-white border-b border-navy-800 hover:text-pink-500 transition-colors cursor-pointer block w-full text-left"
          >
            SBA Eligibility
          </button>

          <div className="pt-10">
            <button
              onClick={() => handleMobileNav('', 'contact')}
              className="w-full bg-white text-navy-900 py-6 rounded-full font-extrabold text-xl flex items-center justify-center gap-4 active:scale-95 transition-transform shadow-xl"
            >
              Contact us
              <ArrowRight size={24} className="text-pink-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
