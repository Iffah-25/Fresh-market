import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Truck, Clock, ShoppingBag, Apple, Leaf, Milk, Croissant, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 bg-primary-light/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 text-center lg:text-left pt-4 md:pt-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-slate-600">Fresh Groceries Delivered Daily</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.2] lg:leading-[1.1]">
                Freshness Delivered To Your <span className="text-primary">Doorstep</span>
              </h1>
              
              <p className="text-sm sm:text-lg text-slate-600 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Experience the finest selection of organic fruits, vegetables, and daily essentials. Farm-fresh quality guaranteed with every order.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link 
                  to="/shop" 
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/150?u=${i}`} 
                        alt="User" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm font-medium text-slate-600">10k+ Happy Customers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="relative z-10 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Fresh Groceries" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Cards - Hidden on very small screens */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 z-20 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500">Quality</p>
                  <p className="text-xs sm:text-sm font-bold">100% Organic</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 z-20 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Truck className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500">Delivery</p>
                  <p className="text-xs sm:text-sm font-bold">Fast & Free</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On all orders over ₹500', color: 'bg-emerald-100 text-emerald-600' },
              { icon: Clock, title: 'Express Delivery', desc: 'Within 2 hours in city limits', color: 'bg-blue-100 text-blue-600' },
              { icon: ShieldCheck, title: 'Secure Payment', desc: '100% secure payment methods', color: 'bg-purple-100 text-purple-600' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-4"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 gap-6 text-center sm:text-left">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Shop by Category</h2>
              <p className="text-slate-500">Explore our wide range of fresh products</p>
            </div>
            <Link to="/shop" className="text-primary font-semibold hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {CATEGORIES.slice(1).map((cat) => {
              const Icon = {
                Apple,
                Leaf,
                Milk,
                Croissant,
                Cookie
              }[cat.icon] || Leaf;

              return (
                <Link 
                  key={cat.id} 
                  to={`/shop?category=${cat.id}`}
                  className="group p-6 bg-white rounded-3xl border border-slate-100 flex flex-col items-center text-center space-y-4 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="font-semibold text-slate-700 group-hover:text-primary">{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-display font-bold">Best Selling Products</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our most popular items loved by customers for their quality and freshness.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] border border-slate-100 overflow-hidden product-card-shadow group"
              >
                <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {product.rating}
                  </div>
                </Link>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{product.category}</p>
                    <Link to={`/product/${product.id}`} className="text-lg font-display font-bold text-slate-900 hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </Link>
                    <p className="text-sm text-slate-400">{product.unit}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">₹{product.price}</span>
                    <button 
                      onClick={() => addToCart(product, 1)}
                      className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] overflow-hidden bg-slate-900 py-20 px-8 md:px-20">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                alt="Promo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 max-w-xl space-y-8">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold uppercase tracking-widest">Limited Time Offer</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                Get <span className="text-primary">20% Off</span> Your First Order
              </h2>
              <p className="text-slate-300 text-lg">
                Use code <span className="text-white font-bold">FRESH20</span> at checkout. Valid for new customers only.
              </p>
              <Link 
                to="/shop" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary-dark transition-all"
              >
                Claim Offer Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-display font-bold">What Our Customers Say</h2>
            <p className="text-slate-500">Real feedback from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Home Chef', text: 'The quality of the vegetables is unmatched. Everything arrives fresh and crisp, just like picking it from the garden myself.' },
              { name: 'Michael Chen', role: 'Busy Professional', text: 'FreshCart has saved me so much time. The 2-hour delivery is a lifesaver when I forget to pick up ingredients for dinner.' },
              { name: 'Emily Davis', role: 'Organic Enthusiast', text: 'I love that I can find all my favorite organic brands in one place. The packaging is also eco-friendly, which is a huge plus!' },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 space-y-6">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${idx + 10}`} alt={testimonial.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-[30px] md:rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="max-w-xl space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Join Our Newsletter</h2>
              <p className="text-primary-light/80 text-base md:text-lg">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            </div>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-3 md:gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 bg-white rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl md:rounded-2xl font-semibold hover:bg-slate-800 transition-all shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
