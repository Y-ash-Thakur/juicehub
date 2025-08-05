"use client";

import { useState } from "react";

const OrderInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    flavour: "",
    address: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    // Handle order submission here
  };

  return (
    <section className="py-16 px-6" style={{ padding: '64px 24px' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '48px' }}>
        
        {/* Left Column - Promotional Content */}
        <div className="relative" style={{ position: 'relative' }}>
          {/* Wooden background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg" style={{ 
            background: 'linear-gradient(135deg,rgb(0, 0, 0), #78350f)', 
            borderRadius: '8px',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}></div>
          
          <div className="relative z-10 p-8 text-white" style={{ position: 'relative', zIndex: 10, padding: '32px', color: 'white' }}>
            <h2 className="text-4xl font-bold mb-4" style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#10b981' }}>
              Make Your Order
            </h2>
            <h3 className="text-xl mb-6" style={{ fontSize: '20px', marginBottom: '24px' }}>
              Freshness Just a Click Away!
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ marginBottom: '32px', fontSize: '18px', lineHeight: '1.6' }}>
              Ordering online has never been easier! Get fresh, delicious juices delivered right to your doorstep. 
              Quick, convenient, and always fresh - just the way nature intended.
            </p>
            
            {/* Contact Info Box */}
            <div className="bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg p-6" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              border: '1px solid rgba(255, 255, 255, 0.3)', 
              borderRadius: '8px', 
              padding: '24px' 
            }}>
              <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="text-lg" style={{ fontSize: '18px' }}>📞</span>
                <div>
                  <p className="text-sm opacity-80" style={{ fontSize: '14px', opacity: 0.8 }}>Any Queries ? Call At</p>
                  <p className="text-lg font-semibold" style={{ fontSize: '18px', fontWeight: '600' }}>+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>
            
            {/* Juice Glasses Visual */}
            <div className="mt-8 flex gap-4" style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
              <div className="w-16 h-20 bg-orange-400 rounded-t-full" style={{ width: '64px', height: '80px', backgroundColor: '#fb923c', borderRadius: '32px 32px 0 0' }}></div>
              <div className="w-16 h-20 bg-red-400 rounded-t-full" style={{ width: '64px', height: '80px', backgroundColor: '#f87171', borderRadius: '32px 32px 0 0' }}></div>
              <div className="w-16 h-20 bg-yellow-400 rounded-t-full" style={{ width: '64px', height: '80px', backgroundColor: '#facc15', borderRadius: '32px 32px 0 0' }}></div>
              <div className="w-16 h-20 bg-green-400 rounded-t-full" style={{ width: '64px', height: '80px', backgroundColor: '#4ade80', borderRadius: '32px 32px 0 0' }}></div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Form */}
        <div className="relative" style={{ position: 'relative' }}>
          {/* Dark background with fruit outlines */}
          <div className="absolute inset-0 bg-gray-900 rounded-lg" style={{ 
            backgroundColor: '#111827', 
            borderRadius: '8px',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}></div>
          
          <div className="relative z-10 p-8" style={{ position: 'relative', zIndex: 10, padding: '32px' }}>
            {/* Form Header */}
            <div className="bg-green-600 text-white text-center py-4 mb-8 relative" style={{ 
              backgroundColor: '#059669', 
              color: 'white', 
              textAlign: 'center', 
              padding: '16px', 
              marginBottom: '32px',
              position: 'relative'
            }}>
              <h3 className="text-2xl font-bold" style={{ fontSize: '24px', fontWeight: 'bold' }}>Fill Your Order!</h3>
              {/* Triangle cutout */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-green-600" style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%) translateY(100%)',
                width: 0,
                height: 0,
                borderLeft: '16px solid transparent',
                borderRight: '16px solid transparent',
                borderTop: '16px solid #059669'
              }}></div>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label className="block text-white text-sm font-medium mb-2" style={{ display: 'block', color: 'white', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: 'white'
                  }}
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2" style={{ display: 'block', color: 'white', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: 'white'
                  }}
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2" style={{ display: 'block', color: 'white', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: 'white'
                  }}
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2" style={{ display: 'block', color: 'white', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  Select Your Flavour *
                </label>
                <select
                  name="flavour"
                  value={formData.flavour}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="">Choose a flavour...</option>
                  <option value="orange">Orange Juice</option>
                  <option value="apple">Apple Juice</option>
                  <option value="grape">Grape Juice</option>
                  <option value="pineapple">Pineapple Juice</option>
                  <option value="mango">Mango Juice</option>
                  <option value="strawberry">Strawberry Smoothie</option>
                  <option value="banana">Banana Smoothie</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2" style={{ display: 'block', color: 'white', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  Your Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: 'white',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200"
                style={{
                  width: '100%',
                  backgroundColor: '#059669',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Order Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInfo; 