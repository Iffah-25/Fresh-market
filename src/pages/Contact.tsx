import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6 mb-12 md:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500"
          >
            Have questions about our products or delivery? We're here to help. Reach out to us anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              { 
                icon: Mail, 
                title: 'Email Us', 
                info: 'support@freshcart.com', 
                desc: 'We usually respond within 24 hours.',
                color: 'bg-emerald-100 text-emerald-600'
              },
              { 
                icon: Phone, 
                title: 'Call Us', 
                info: '+1 (555) 123-4567', 
                desc: 'Mon-Fri from 8am to 6pm.',
                color: 'bg-blue-100 text-blue-600'
              },
              { 
                icon: MapPin, 
                title: 'Visit Us', 
                info: '123 Grocery Lane, Fresh Valley, CA', 
                desc: 'Our main distribution center.',
                color: 'bg-purple-100 text-purple-600'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 md:p-8 bg-white rounded-2xl md:rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-4 md:gap-6"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base md:text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="font-medium text-slate-700 text-sm md:text-base break-words">{item.info}</p>
                  <p className="text-xs md:text-sm text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-3xl md:rounded-[40px] border border-slate-100 shadow-xl p-6 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-display font-bold">Send us a Message</h2>
                <p className="text-slate-500 text-xs md:text-sm">Fill out the form below and we'll get back to you.</p>
              </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="button"
                  className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 relative rounded-[40px] overflow-hidden h-[400px] bg-slate-200 border border-slate-100 group">
          <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
              alt="Map Location" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-700" />
          <div className="absolute bottom-10 left-10 right-10 md:left-auto md:right-10 md:w-80 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900">Opening Hours</h4>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="font-bold">8:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat - Sun:</span>
                <span className="font-bold">9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
