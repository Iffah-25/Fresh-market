import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingBag, ArrowLeft, Plus, Minus, ShieldCheck, Truck, RotateCcw, Heart } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-32 pb-24 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-display font-bold">Product not found</h2>
        <Link to="/shop" className="px-8 py-3 bg-primary text-white rounded-2xl font-semibold">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-[30px] sm:rounded-[40px] overflow-hidden bg-slate-50 border border-slate-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl transition-all ${isLiked ? 'bg-red-500 text-white' : 'bg-white text-slate-400 hover:text-red-500'}`}
            >
              <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-3 md:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-slate-900 font-bold">{product.rating}</span>
                </div>
                <span className="text-slate-400">|</span>
                <span className="text-slate-500 text-sm">120+ Reviews</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">₹{product.price}</span>
                <span className="text-slate-400 line-through text-lg md:text-xl">₹{(product.price * 1.2).toFixed(0)}</span>
              </div>
              <p className="text-slate-500">{product.unit}</p>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex items-center bg-slate-100 rounded-2xl p-1 w-full sm:w-auto justify-between sm:justify-start">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-slate-600 hover:text-primary transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-slate-600 hover:text-primary transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="w-full sm:flex-grow py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Add to Cart — ₹{(product.price * quantity).toFixed(0)}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-600">Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-600">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-600">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="space-y-12">
            <h2 className="text-3xl font-display font-bold">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[32px] border border-slate-100 overflow-hidden product-card-shadow group"
                >
                  <Link to={`/product/${p.id}`} className="block relative aspect-square overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{p.category}</p>
                      <Link to={`/product/${p.id}`} className="text-lg font-display font-bold text-slate-900 hover:text-primary transition-colors line-clamp-1">
                        {p.name}
                      </Link>
                      <p className="text-sm text-slate-400">{p.unit}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-900">₹{p.price}</span>
                      <button 
                        onClick={() => addToCart(p, 1)}
                        className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
