import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Calendar, CheckCircle2, Mail, Phone, Building2 } from 'lucide-react';

const BookingFlow = ({ qualificationData, report, onBack, onSkip, preFillData }) => {
  const [step, setStep] = useState('calendar'); // 'calendar' or 'confirmation'
  
  // Build Calendly URL with qualification data
  const getCalendlyUrl = () => {
    const baseUrl = 'https://calendly.com/hcafinance-info/30min';
    const params = new URLSearchParams();
    
    // Add contact info
    if (preFillData?.firstName && preFillData?.lastName) {
      params.append('name', `${preFillData.firstName} ${preFillData.lastName}`);
    }
    if (preFillData?.email) {
      params.append('email', preFillData.email);
    }
    if (preFillData?.phone) {
      params.append('phone_number', preFillData.phone);
    }
    
    // Add business info and qualification data
    let qualificationText = '';
    if (preFillData?.businessName) {
      qualificationText += `Company: ${preFillData.businessName}\n`;
    }
    if (qualificationData?.yearsInBusiness) {
      qualificationText += `Years in Business: ${qualificationData.yearsInBusiness}\n`;
    }
    if (qualificationData?.annualRevenue) {
      qualificationText += `Annual Revenue: ${qualificationData.annualRevenue}\n`;
    }
    if (qualificationData?.creditScore) {
      qualificationText += `Credit Score: ${qualificationData.creditScore}\n`;
    }
    if (qualificationData?.fundingAmount) {
      qualificationText += `Desired Funding: ${qualificationData.fundingAmount}`;
    }
    
    if (qualificationText) {
      params.append('a1', qualificationText);
    }
    
    return `${baseUrl}?${params.toString()}`;
  };

  // Redirect to Calendly with qualification data
  const handleBookCalendar = () => {
    window.location.href = getCalendlyUrl();
  };

  // Calendar Step - Full width calendar only
  if (step === 'calendar') {
    return (
      <div className="pt-20">
        {/* Simple Hero */}
        <section className="bg-[#F1F4F9] py-12 lg:py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[1px] w-12 bg-pink-300"></div>
              <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Book Your Consultation</span>
              <div className="h-[1px] w-12 bg-pink-300"></div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 leading-tight mb-4">
              Select Your Preferred Time
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose an available time for your SBA funding consultation. Your information will be included with your booking.
            </p>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="bg-white py-12 lg:py-16">
          <div className="container mx-auto px-6">
            {/* Calendar Container */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-[#F1F4F9] rounded-[32px] p-6 lg:p-8">
                {/* Qualification Summary */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-pink-100 p-6">
                  <h3 className="font-bold text-navy-900 mb-4 text-lg">Your Qualification Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Name</span>
                      <span className="text-navy-900 font-bold">{preFillData?.firstName} {preFillData?.lastName}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Company</span>
                      <span className="text-navy-900 font-bold">{preFillData?.businessName}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Email</span>
                      <span className="text-navy-900 font-bold text-sm">{preFillData?.email}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Phone</span>
                      <span className="text-navy-900 font-bold">{preFillData?.phone}</span>
                    </div>
                    {qualificationData?.yearsInBusiness && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Years in Business</span>
                        <span className="text-navy-900 font-bold">{qualificationData.yearsInBusiness}</span>
                      </div>
                    )}
                    {qualificationData?.annualRevenue && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Annual Revenue</span>
                        <span className="text-navy-900 font-bold">{qualificationData.annualRevenue}</span>
                      </div>
                    )}
                    {qualificationData?.creditScore && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Credit Score</span>
                        <span className="text-navy-900 font-bold">{qualificationData.creditScore}</span>
                      </div>
                    )}
                    {qualificationData?.fundingAmount && (
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">Desired Funding</span>
                        <span className="text-navy-900 font-bold">{qualificationData.fundingAmount}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Booking Button */}
                <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                  <p className="text-sm text-green-900 mb-4">
                    <strong>Ready to book?</strong> Click the button below to schedule your consultation on Calendly. All your qualification information will be included with your booking.
                  </p>
                  <button
                    onClick={handleBookCalendar}
                    className="w-full bg-navy-900 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-lg"
                  >
                    <Calendar size={20} />
                    Book on Calendly
                    <ArrowRight size={18} className="text-pink-500 group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Confirmation Step
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-b from-[#F1F4F9] to-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full p-4">
                <CheckCircle2 size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 leading-tight mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your consultation has been scheduled. Check your email for confirmation details and next steps.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="bg-white rounded-[32px] shadow-lg p-8 lg:p-12 space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="font-bold text-gray-600 mb-4 text-sm uppercase">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Email</p>
                    <p className="text-sm font-bold text-navy-900">{preFillData?.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Phone</p>
                    <p className="text-sm font-bold text-navy-900">{preFillData?.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div>
              <h3 className="font-bold text-gray-600 mb-4 text-sm uppercase">Application Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Years in Business</p>
                  <p className="text-sm font-bold text-navy-900">{answers?.years || 'Not specified'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Annual Revenue</p>
                  <p className="text-sm font-bold text-navy-900">{answers?.revenue || 'Not specified'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Credit Score</p>
                  <p className="text-sm font-bold text-navy-900">{answers?.credit || 'Not specified'}</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-sm font-bold text-blue-900 mb-2">📅 What's Next?</p>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>✓ Check your email for the calendar confirmation</li>
                <li>✓ Our team will contact you 24-48 hours before your appointment</li>
                <li>✓ Prepare your business documents for discussion</li>
                <li>✓ Ask questions about SBA financing programs</li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-12 text-center">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 font-bold rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg bg-navy-900 text-white hover:bg-pink-500"
            >
              <ArrowRight size={20} className="rotate-180" />
              Return to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingFlow;
