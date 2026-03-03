import React, { useEffect, useState } from 'react';
import { Phone, Building2, ArrowRight } from 'lucide-react';

const ContactPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    hear: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      {/* Contact Hero Section */}
      <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-6xl lg:text-8xl font-serif font-medium text-navy-900 leading-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-[#F1F4F9] py-20 lg:py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-8">
              Get in touch
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
              If you would like to find out more about how we can help fund your business growth, please contact us using the form below for a no-obligation, confidential consultation.
            </p>

            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium">
                Thank you! Your message has been received. We&apos;ll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-bold text-navy-900">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-bold text-navy-900">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="block text-sm font-bold text-navy-900">Company name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-navy-900">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-navy-900">Contact number <span className="text-gray-400 font-normal">(optional)</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="hear" className="block text-sm font-bold text-navy-900">How did you hear about us?</label>
                <select
                  id="hear"
                  name="hear"
                  value={formData.hear}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none appearance-none"
                >
                  <option value="">Select option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-navy-900">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-navy-900 text-white px-10 py-4 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 inline-flex items-center gap-2 group shadow-lg"
              >
                Lets talk
              </button>
            </form>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5">
            <div className="bg-white p-12 rounded-[40px] shadow-sm space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-8">Our contact details</h3>
                <div className="flex items-start gap-4 group">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <a href="tel:01174711341" className="text-lg font-medium text-navy-900 hover:text-pink-500 transition-colors">0117 471 1341</a>
                    <div className="mt-2">
                      <a href="mailto:info@hcafinance.org" className="text-lg font-medium text-navy-900 hover:text-pink-500 transition-colors">info@hcafinance.org</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-500">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2">HCA Finance Technologies</h4>
                    <p className="text-gray-600 leading-relaxed">
                      2530 The Quadrant<br />
                      Aztec West<br />
                      Bristol<br />
                      BS32 4AW
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group pt-8">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-500">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2">HCA Finance Registered Office</h4>
                    <p className="text-gray-600 leading-relaxed">
                      22 Over Ln<br />
                      Almondsbury<br />
                      Bristol<br />
                      BS32 4BP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-20">
          <button onClick={onBack} className="text-pink-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
            <ArrowRight size={20} className="rotate-180" /> Back to home
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
