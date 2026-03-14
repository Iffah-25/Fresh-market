import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, CreditCard, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlacingOrder(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsPlacingOrder(false);
      setOrderSuccess(true);
      clearCart();
    }, 2000);
  };

  if (orderSuccess) {
    return (
      <div className="pt-32 pb-24 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-slate-500 text-lg max-w-md mb-10">
          Thank you for shopping with FreshCart. Your order #FC-92834 is being prepared and will reach you shortly.
        </p>
        <Link 
          to="/shop" 
          className="px-10 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-64 h-64 mb-8 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1586769852044-692d6e692453?auto=format&fit=crop&q=80&w=800" 
            alt="Empty Cart" 
            className="w-full h-full object-cover rounded-[40px] opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag className="w-24 h-24 text-slate-300" />
          </div>
        </motion.div>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Your cart is empty</h1>
        <p className="text-slate-500 mb-10">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/shop" 
          className="px-10 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50">
                <h2 className="text-xl font-bold">Your Cart ({cart.length} items)</h2>
              </div>
              <div className="divide-y divide-slate-50">
                {cart.map((item) => (
                  <div key={item.id} className="p-4 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-50 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow space-y-1 text-center sm:text-left">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-slate-400">{item.unit}</p>
                      <p className="text-primary font-bold">₹{item.price}</p>
                    </div>
                    <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                      <div className="flex items-center bg-slate-100 rounded-xl p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-primary"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-primary"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right min-w-[60px] sm:min-w-[80px]">
                          <p className="font-bold text-slate-900">₹{item.price * item.quantity}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Form */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-8">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Truck className="text-primary w-6 h-6" />
                Shipping Information
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Delivery Address</label>
                  <textarea rows={3} placeholder="Flat No, Building, Street, Area" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">City</label>
                  <input type="text" placeholder="Mumbai" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Pincode</label>
                  <input type="text" placeholder="400001" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-6 lg:sticky lg:top-32">
              <h2 className="text-xl font-bold">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-emerald-500">FREE</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Tax (GST 5%)</span>
                  <span className="font-bold text-slate-900">₹{(cartTotal * 0.05).toFixed(0)}</span>
                </div>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-2xl font-bold text-primary">₹{(cartTotal * 1.05).toFixed(0)}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400">Payment Method</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center gap-2 p-4 border-2 border-primary bg-primary/5 rounded-2xl text-primary">
                    <CreditCard className="w-6 h-6" />
                    <span className="text-xs font-bold">Online</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 border-2 border-slate-100 rounded-2xl text-slate-400 hover:border-primary/30 hover:text-primary transition-all">
                    <Truck className="w-6 h-6" />
                    <span className="text-xs font-bold">COD</span>
                  </button>
                </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all disabled:opacity-70 disabled:translate-y-0 flex items-center justify-center gap-3"
              >
                {isPlacingOrder ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Place Order
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                Secure Checkout Powered by FreshCart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
