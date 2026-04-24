'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const PLACEHOLDER_IMAGE = '/placeholder.png'

function CartItemImage({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-primary-100">
        <span className="text-primary-400 text-xs">No Image</span>
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
    />
  )
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotalPrice } = useCart()
  const total = getTotalPrice()

  return (
    <Fragment>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary-100">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-lg font-medium">Shopping Bag ({items.length})</h2>
            </div>
            <button 
              onClick={closeCart}
              className="p-2 hover:bg-primary-50 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-10 h-10 text-primary-400" />
                </div>
                <p className="text-primary-600 mb-4">Your bag is empty</p>
                <button 
                  onClick={closeCart}
                  className="text-sm text-accent hover:text-accent-dark font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                    className="flex gap-4"
                  >
                    <div className="relative w-24 h-28 bg-primary-50 flex-shrink-0">
                      <CartItemImage src={item.image} alt={item.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-primary-900 truncate">{item.name}</h3>
                      {item.selectedSize && (
                        <p className="text-xs text-primary-500 mt-1">Size: {item.selectedSize}</p>
                      )}
                      {item.selectedColor && (
                        <p className="text-xs text-primary-500">Color: {item.selectedColor}</p>
                      )}
                      <p className="text-sm font-medium text-primary-900 mt-2">
                        ₹{item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-primary-200">
                          <button
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1, item.selectedSize, item.selectedColor)}
                            className="p-1 hover:bg-primary-50"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{(item.quantity || 1)}</span>
                          <button
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1, item.selectedSize, item.selectedColor)}
                            className="p-1 hover:bg-primary-50"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.selectedSize, item.selectedColor)}
                          className="text-xs text-primary-500 hover:text-red-500 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-primary-100 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-primary-600">Subtotal</span>
                <span className="text-lg font-medium text-primary-900">
                  ₹{total.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-primary-500">Shipping calculated at checkout</p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn-primary w-full justify-center"
              >
                Checkout
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <button 
                onClick={closeCart}
                className="w-full py-3 text-sm text-primary-600 hover:text-primary-900 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}