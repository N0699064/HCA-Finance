import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Calendar, CheckCircle2, Mail, Phone, Building2 } from 'lucide-react';

const BookingFlow = ({ answers, report, onBack, onSkip, preFillData }) => {
  const [step, setStep] = useState('calendar'); // 'calendar' or 'confirmation'
  
  const calendarLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0TCcJcIDgq9etkCvwhkUhCoUi8QK0xhOroRYUKCZgsrb7aJALWXOw2lzQfBK_grQXJF2BapJdN?tz=America/New_York';

  // Create appointment details string with all information
  const appointmentDetails = `
APPLICANT INFORMATION:
Name: ${preFillData?.firstName} ${preFillData?.lastName}
Company: ${preFillData?.businessName}
Email: ${preFillData?.email}
Phone: ${preFillData?.phone}

APPLICATION DETAILS:
Years in Business: ${answers?.years || 'Not specified'}
Annual Revenue: ${answers?.revenue || 'Not specified'}
Credit Score: ${answers?.credit || 'Not specified'}

Please include all above information when booking your consultation.
  `.trim();

  const handleBookingComplete = () => {
    setStep('confirmation');
    window.scrollTo(0, 0);
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
                {/* Calendar Embedded */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-pink-100">
                  <iframe
                    src={calendarLink}
                    style={{
                      width: '100%',
                      height: '600px',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                    title="Schedule a Consultation"
                  ></iframe>
                </div>

                {/* Instructions */}
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                  <p className="text-sm font-bold text-blue-900 mb-2">📋 Appointment Details</p>
                  <p className="text-xs text-blue-800">When booking, your contact information will be automatically associated with your appointment:</p>
                  <div className="mt-3 text-xs text-blue-700 space-y-1 font-mono bg-white p-3 rounded max-h-40 overflow-y-auto">
                    {appointmentDetails.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>

                {/* Applicant Summary */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Name</p>
                    <p className="text-sm font-bold text-navy-900">{preFillData?.firstName} {preFillData?.lastName}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Company</p>
                    <p className="text-sm font-bold text-navy-900">{preFillData?.businessName}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Email</p>
                    <p className="text-xs font-bold text-navy-900 break-all">{preFillData?.email}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Phone</p>
                    <p className="text-sm font-bold text-navy-900">{preFillData?.phone}</p>
                  </div>
                </div>

                {/* CTA Note */}
                <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                  <p className="text-sm text-amber-900">
                    <strong>After booking:</strong> You'll receive a confirmation email with meeting details. Our SBA specialists will review your information and contact you to confirm the appointment time.
                  </p>
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
