'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

function CartItemImage({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
        <span className="text-neutral-400 text-xs">No Image</span>
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
      {isOpen && (
        <div 
          className="fixed inset-0 bg-neutral-900/40 z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <h2 className="text-sm font-medium">Shopping Bag ({items.length})</h2>
            </div>
            <button 
              onClick={closeCart}
              className="p-1.5 hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-neutral-400" />
                </div>
                <p className="text-neutral-500 mb-3 text-sm">Your bag is empty</p>
                <button 
                  onClick={closeCart}
                  className="text-sm text-brand-600 hover:text-brand-700 font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                    className="flex gap-3"
                  >
                    <div className="relative w-20 h-24 bg-neutral-100 flex-shrink-0">
                      <CartItemImage src={item.image} alt={item.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-neutral-800 truncate">{item.name}</h3>
                      {item.selectedSize && (
                        <p className="text-xs text-neutral-400 mt-0.5">Size: {item.selectedSize}</p>
                      )}
                      {item.selectedColor && (
                        <p className="text-xs text-neutral-400">{item.selectedColor}</p>
                      )}
                      <p className="text-sm font-medium text-neutral-900 mt-1">
                        ₹{(item.price * (item.quantity || 1)).toLocaleString()}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-neutral-200">
                          <button
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1, item.selectedSize, item.selectedColor)}
                            className="p-1.5 hover:bg-neutral-50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-sm">{item.quantity || 1}</span>
                          <button
                            onClick={() => updateQuantity(item.id, (item.quantity || 0) + 1, item.selectedSize, item.selectedColor)}
                            className="p-1.5 hover:bg-neutral-50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.selectedSize, item.selectedColor)}
                          className="text-xs text-neutral-400 hover:text-red-500 transition-colors"
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

          {items.length > 0 && (
            <div className="border-t border-neutral-100 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">Subtotal</span>
                <span className="text-base font-medium text-neutral-900">
                  ₹{total.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-neutral-400">Shipping calculated at checkout</p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn-primary w-full justify-center text-xs"
              >
                Checkout
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
              <button 
                onClick={closeCart}
                className="w-full py-2.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
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