import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Our Shop</h1>
            <p className="text-slate-500">Browse through our collection of fresh organic products</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-80 pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-medium text-slate-700 hover:bg-slate-50 transition-all lg:hidden"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-10">
            <div>
              <h3 className="text-lg font-display font-bold mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5 text-primary" />
                Categories
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedCategory === cat.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-slate-600 hover:bg-white hover:shadow-md'}`}
                  >
                    <span className="font-medium">{cat.name}</span>
                    <span className={`text-xs ${selectedCategory === cat.id ? 'text-white/80' : 'text-slate-400'}`}>
                      {cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold mb-6">Sort By</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="p-6 bg-primary rounded-[32px] text-white space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center relative z-10">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold relative z-10">Get 10% Off</h4>
              <p className="text-primary-light/80 text-sm relative z-10">On your first organic fruit box purchase!</p>
              <button className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-slate-50 transition-all relative z-10">
                Learn More
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
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
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(product, 1);
                            }}
                            className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                          >
                            <ShoppingBag className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-slate-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold">No products found</h3>
                  <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
                </div>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="px-8 py-3 bg-primary text-white rounded-2xl font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-[70] p-8 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-display font-bold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 text-slate-400">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-bold mb-6">Categories</h3>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setIsFilterOpen(false); }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedCategory === cat.id ? 'bg-primary text-white' : 'bg-slate-50 text-slate-600'}`}
                      >
                        <span className="font-medium">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-6">Sort By</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'featured', name: 'Featured' },
                      { id: 'price-low', name: 'Price: Low to High' },
                      { id: 'price-high', name: 'Price: High to Low' },
                      { id: 'rating', name: 'Top Rated' },
                    ].map((sort) => (
                      <button
                        key={sort.id}
                        onClick={() => { setSortBy(sort.id); setIsFilterOpen(false); }}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all ${sortBy === sort.id ? 'bg-primary text-white' : 'bg-slate-50 text-slate-600'}`}
                      >
                        {sort.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
