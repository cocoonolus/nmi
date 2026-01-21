import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Heart } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Contact Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We would love to hear from you. Whether you have a prayer request, want to volunteer, or have questions about our mission, get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-lg mr-4 text-gold-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Headquarters</h4>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Lagos,Nigeria" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 mt-1 hover:text-gold-600 transition-colors block"
                    >
                      Lagos, Nigeria
                    </a>
                    <p className="text-slate-500 text-sm mt-1">Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-lg mr-4 text-gold-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <a 
                      href="tel:+2348121694422" 
                      className="text-slate-600 mt-1 hover:text-gold-600 transition-colors block"
                    >
                      +234 812 169 4422
                    </a>
                    <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-lg mr-4 text-gold-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <a 
                      href="mailto:info@noahministriesinternational.org" 
                      className="text-slate-600 mt-1 hover:text-gold-600 transition-colors block break-all"
                    >
                      info@noahministriesinternational.org
                    </a>
                    <p className="text-slate-500 text-sm mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
               <h3 className="text-xl font-bold mb-4 flex items-center">
                 <Clock className="w-5 h-5 mr-2 text-gold-500" /> 
                 Service Times
               </h3>
               <ul className="space-y-3 text-slate-300">
                 <li className="flex justify-between border-b border-slate-700 pb-2">
                   <span>Sunday Worship</span>
                   <span>9:00 AM</span>
                 </li>
                 <li className="flex justify-between border-b border-slate-700 pb-2">
                   <span>Wednesday Bible Study</span>
                   <span>6:00 PM</span>
                 </li>
                 <li className="flex justify-between pt-2">
                   <span>Friday Prayer</span>
                   <span>7:00 PM</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Volunteering</option>
                  <option>Donation Support</option>
                  <option>Medical Mission</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-gold-500 text-white font-bold py-4 rounded-lg hover:bg-gold-600 transition-colors flex items-center justify-center shadow-md">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* PRAYER REQUEST SECTION */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
               <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
               
               <div className="relative z-10">
                 <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                    <Heart className="w-7 h-7 text-gold-500 fill-current" />
                 </div>
                 <h3 className="text-3xl font-serif font-bold mb-4">Need Prayer?</h3>
                 <p className="text-slate-300 leading-relaxed mb-8">
                   "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." 
                   <span className="block mt-3 text-gold-500 font-serif">- Philippians 4:6</span>
                 </p>
                 <div className="space-y-4">
                   <div className="flex items-center text-sm text-slate-400">
                     <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                     Confidential Support
                   </div>
                   <div className="flex items-center text-sm text-slate-400">
                     <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                     Pastoral Intercession
                   </div>
                 </div>
               </div>
            </div>

            <div className="md:col-span-3 p-8 md:p-12 bg-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Submit a Prayer Request</h3>
                <p className="text-slate-500 text-sm">Our intercessory team is standing by to lift your burden.</p>
              </div>
              
              <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Your Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:bg-white focus:ring-0 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:bg-white focus:ring-0 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Prayer Request</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:bg-white focus:ring-0 outline-none transition-all" placeholder="Please pray for..."></textarea>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
                    <label className="flex items-center space-x-3 cursor-pointer group w-full sm:w-auto">
                      <input type="checkbox" className="w-5 h-5 text-gold-600 rounded border-gray-300 focus:ring-gold-500" />
                      <span className="text-sm text-slate-500">Keep Anonymous</span>
                    </label>
                    <button type="button" className="w-full sm:w-auto bg-gold-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/20 transform hover:-translate-y-0.5">
                      Submit Request
                    </button>
                 </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};