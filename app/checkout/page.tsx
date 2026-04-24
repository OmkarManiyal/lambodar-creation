'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { ChevronLeft, CreditCard, Truck, CheckCircle, Lock, ArrowRight } from 'lucide-react'

type Step = 'shipping' | 'payment' | 'confirm'

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState<Step>('shipping')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('cod')

  const total = getTotalPrice()

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('payment')
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setOrderPlaced(true)
    clearCart()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (orderPlaced) {
    return (
      <div className="pt-28 pb-20 min-h-[60vh]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-serif font-medium text-primary-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-primary-600 mb-2">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
            <p className="text-primary-500 text-sm mb-8">
              Order ID: LC{Date.now().toString().slice(-8)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" className="btn-primary">
                Continue Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a 
                href="https://wa.me/918657668819" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Track on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <Link href="/cart" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-900 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Cart
        </Link>

        <h1 className="text-4xl font-serif font-medium text-primary-900 mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {['shipping', 'payment', 'confirm'].map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep === step 
                  ? 'bg-primary-900 text-white' 
                  : index < ['shipping', 'payment', 'confirm'].indexOf(currentStep)
                    ? 'bg-green-500 text-white'
                    : 'bg-primary-200 text-primary-600'
              }`}>
                {index < ['shipping', 'payment', 'confirm'].indexOf(currentStep) ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </div>
              <span className="ml-2 text-sm font-medium capitalize">{step}</span>
              {index < 2 && <div className="w-12 h-0.5 bg-primary-200 mx-4" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {currentStep === 'shipping' && (
              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <div className="bg-white p-6 border border-primary-100">
                  <h2 className="text-lg font-medium text-primary-900 mb-6 flex items-center">
                    <Truck className="w-5 h-5 mr-2 text-accent" />
                    Shipping Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={shippingData.firstName}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={shippingData.lastName}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={shippingData.email}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={shippingData.phone}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-primary-700 mb-1">Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={shippingData.address}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="House No, Street, Area"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={shippingData.city}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="Mumbai"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={shippingData.state}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="Maharashtra"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        value={shippingData.pincode}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="400001"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Continue to Payment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            )}

            {currentStep === 'payment' && (
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="bg-white p-6 border border-primary-100">
                  <h2 className="text-lg font-medium text-primary-900 mb-6 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-accent" />
                    Payment Method
                  </h2>
                  <div className="space-y-4">
                    <label className={`flex items-start gap-4 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === 'cod' ? 'border-primary-900 bg-primary-50' : 'border-primary-200 hover:border-primary-400'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-medium">Cash on Delivery (COD)</span>
                        <p className="text-sm text-primary-500 mt-1">Pay when you receive your order</p>
                      </div>
                    </label>
                    <label className={`flex items-start gap-4 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === 'card' ? 'border-primary-900 bg-primary-50' : 'border-primary-200 hover:border-primary-400'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-medium">Credit/Debit Card</span>
                        <p className="text-sm text-primary-500 mt-1">Pay securely with your card</p>
                        <div className="flex gap-3 mt-3">
                          <input type="text" placeholder="Card Number" className="input-field text-sm" />
                          <input type="text" placeholder="MM/YY" className="input-field text-sm w-24" />
                          <input type="text" placeholder="CVV" className="input-field text-sm w-20" />
                        </div>
                      </div>
                    </label>
                    <label className={`flex items-start gap-4 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === 'upi' ? 'border-primary-900 bg-primary-50' : 'border-primary-200 hover:border-primary-400'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-medium">UPI Payment</span>
                        <p className="text-sm text-primary-500 mt-1">Pay using Google Pay, PhonePe, Paytm, etc.</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('shipping')}
                    className="btn-secondary flex-1 justify-center"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="btn-primary flex-1 justify-center"
                  >
                    {isProcessing ? 'Processing...' : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Place Order
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-primary-50 p-6 sticky top-28">
              <h2 className="text-lg font-medium text-primary-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 max-h-[300px] overflow-y-auto mb-4">
                {items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-3">
                    {item.image ? (
                    <div className="relative w-16 h-20 bg-white flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary-900 text-white text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    ) : (
                    <div className="relative w-16 h-20 bg-primary-100 flex-shrink-0 flex items-center justify-center">
                      <span className="text-primary-400 text-xs">No Image</span>
                    </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-primary-900 line-clamp-1">{item.name}</p>
                      {item.selectedSize && (
                        <p className="text-xs text-primary-500">Size: {item.selectedSize}</p>
                      )}
                      <p className="text-sm text-primary-900 mt-1">₹{(item.price * (item.quantity || 1)).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-primary-200">
                <div className="flex justify-between text-sm">
                  <span className="text-primary-600">Subtotal</span>
                  <span className="text-primary-900">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary-600">Shipping</span>
                  <span className="text-primary-900">{total >= 999 ? 'Free' : '₹50'}</span>
                </div>
                <div className="flex justify-between font-medium pt-3 border-t border-primary-200">
                  <span className="text-primary-900">Total</span>
                  <span className="text-primary-900">₹{(total + (total >= 999 ? 0 : 50)).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs text-primary-500">
                <Lock className="w-3 h-3" />
                <span>Your payment information is secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}