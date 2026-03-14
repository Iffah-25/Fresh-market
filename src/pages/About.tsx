import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, Users, Heart, ShieldCheck, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-light/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Our Story
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight"
            >
              Freshness From <br className="hidden sm:block" />
              <span className="text-primary">Farm to Table</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              Founded in 2020, FreshCart started with a simple mission: to make high-quality, organic groceries accessible to everyone while supporting local farmers.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
            alt="Farm" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=1200" 
                  alt="Quality Produce" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-primary p-6 md:p-8 rounded-2xl md:rounded-[32px] text-white shadow-2xl">
                <p className="text-3xl md:text-4xl font-bold mb-1">100%</p>
                <p className="text-[10px] md:text-sm font-medium opacity-80 uppercase tracking-widest">Organic Certified</p>
              </div>
            </div>
            
            <div className="space-y-8 md:space-y-12 mt-12 md:mt-0">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Our Mission</h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  We believe that everyone deserves access to fresh, healthy food. Our mission is to bridge the gap between local producers and urban communities, ensuring that quality is never compromised for convenience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { icon: Leaf, title: 'Sustainable', desc: 'Eco-friendly packaging and sourcing.' },
                  { icon: Award, title: 'Quality', desc: 'Only the finest organic products.' },
                  { icon: Users, title: 'Community', desc: 'Supporting local farm families.' },
                  { icon: Heart, title: 'Health', desc: 'Promoting a better lifestyle.' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <h2 className="text-4xl font-display font-bold">Our Quality Promise</h2>
            <p className="text-slate-500 text-lg">We go above and beyond to ensure that every item in your cart meets our rigorous standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Daily Freshness', 
                desc: 'Our produce is harvested and delivered within 24 hours to maintain peak nutritional value and taste.',
                icon: ShieldCheck,
                color: 'bg-emerald-100 text-emerald-600'
              },
              { 
                title: 'Strict Sourcing', 
                desc: 'We personally visit every farm we partner with to ensure they follow ethical and sustainable practices.',
                icon: Award,
                color: 'bg-blue-100 text-blue-600'
              },
              { 
                title: 'Safe Delivery', 
                desc: 'Our specialized cold-chain delivery system keeps your groceries at the perfect temperature until they reach you.',
                icon: Truck,
                color: 'bg-purple-100 text-purple-600'
              }
            ].map((promise, idx) => (
              <div key={idx} className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all space-y-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${promise.color}`}>
                  <promise.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold">{promise.title}</h3>
                <p className="text-slate-500 leading-relaxed">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold">Meet Our Founders</h2>
              <p className="text-slate-500 max-w-xl">The passionate individuals behind FreshCart's vision for a healthier future.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Rivera', role: 'CEO & Founder', img: 'https://i.pravatar.cc/150?u=alex' },
              { name: 'Sarah Chen', role: 'Head of Sourcing', img: 'https://i.pravatar.cc/150?u=sarah' },
              { name: 'Marcus Thorne', role: 'Operations Director', img: 'https://i.pravatar.cc/150?u=marcus' },
              { name: 'Elena Vance', role: 'Customer Success', img: 'https://i.pravatar.cc/150?u=elena' },
            ].map((member, idx) => (
              <div key={idx} className="group text-center space-y-4">
                <div className="aspect-square rounded-[40px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-slate-500 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
