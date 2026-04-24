'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useCartStore } from '@/store/cartStore'
import { CartProduct } from '@/lib/product'

interface CartContextType {
  items: CartProduct[]
  isOpen: boolean
  addItem: (product: any, quantity?: number, selectedSize?: string, selectedColor?: string) => void
  removeItem: (id: string, selectedSize?: string, selectedColor?: string) => void
  updateQuantity: (id: string, quantity: number, selectedSize?: string, selectedColor?: string) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <CartContext.Provider value={useCartStore()}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}