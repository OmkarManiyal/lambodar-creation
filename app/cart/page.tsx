'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Minus, Plus, Trash2, ShoppingBag, Lock } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCart()
  const total = getTotalPrice()
  const itemCount = getTotalItems()

  if (items.length === 0) {
    return (
      <div className="pt-28 pb-20 min-h-[60vh]">
        <div className="container-custom">
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-primary-400" />
            </div>
            <h1 className="text-3xl font-serif font-medium text-primary-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-primary-600 mb-8">
              Looks like you have not added anything to your cart yet.
            </p>
            <Link href="/shop" className="btn-primary inline-flex">
              Continue Shopping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <h1 className="text-4xl font-serif font-medium text-primary-900 mb-8">
          Shopping Cart ({itemCount})
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <div 
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                className="flex gap-6 p-6 bg-white border border-primary-100"
              >
                {item.image ? (
                <div className="relative w-32 h-40 bg-primary-50 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                ) : (
                <div className="relative w-32 h-40 bg-primary-50 flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary-400 text-sm">No Image</span>
                </div>
                )}
                <div className="flex-1 min-w-0">
                  <Link 
                    href={`/product/${item.id}`}
                    className="text-lg font-medium text-primary-900 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-primary-500 mt-1">
                    Category: {item.category}
                  </p>
                  {item.selectedSize && (
                    <p className="text-sm text-primary-500">
                      Size: {item.selectedSize}
                    </p>
                  )}
                  {item.selectedColor && (
                    <p className="text-sm text-primary-500">
                      Color: {item.selectedColor}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                    <div className="flex items-center border border-primary-200">
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1, item.selectedSize, item.selectedColor)}
                        className="p-2 hover:bg-primary-50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 min-w-[50px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 0) + 1, item.selectedSize, item.selectedColor)}
                        className="p-2 hover:bg-primary-50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-lg font-medium text-primary-900">
                      ₹{(item.price * (item.quantity || 1)).toLocaleString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.selectedSize, item.selectedColor)}
                  className="p-2 text-primary-400 hover:text-red-500 transition-colors self-start"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-primary-50 p-6 sticky top-28">
              <h2 className="text-lg font-medium text-primary-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 pb-6 border-b border-primary-200">
                <div className="flex justify-between text-sm">
                  <span className="text-primary-600">Subtotal ({itemCount} items)</span>
                  <span className="text-primary-900">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary-600">Shipping</span>
                  <span className="text-primary-900">
                    {total >= 999 ? 'Free' : 'Calculated at checkout'}
                  </span>
                </div>
              </div>

              <div className="flex justify-between py-6">
                <span className="text-lg font-medium text-primary-900">Total</span>
                <span className="text-xl font-medium text-primary-900">
                  ₹{total.toLocaleString()}
                </span>
              </div>

              <Link href="/checkout" className="btn-primary w-full justify-center mb-4">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <div className="flex items-center justify-center gap-2 text-sm text-primary-500">
                <Lock className="w-4 h-4" />
                <span>Secure Checkout</span>
              </div>

              <Link href="/shop" className="block text-center mt-4 text-sm text-accent hover:text-accent-dark">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}