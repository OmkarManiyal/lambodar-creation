import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartProduct, normalizeProduct, validateCartProduct } from '@/lib/product'

interface CartState {
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

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (product: any, quantity = 1, selectedSize, selectedColor) => {
        const normalized = normalizeProduct(product)
        
        if (!normalized) {
          console.error('addItem: Failed to normalize product')
          return
        }

        if (!validateCartProduct(normalized)) {
          console.error('addItem: Invalid product data')
          return
        }

        if (selectedSize) normalized.selectedSize = selectedSize
        if (selectedColor) normalized.selectedColor = selectedColor
        if (quantity > 0) normalized.quantity = quantity

        console.log('addItem: Adding product to cart:', normalized)

        set((state) => {
          const existingIndex = state.items.findIndex(
            item => 
              item.id === normalized.id && 
              item.selectedSize === normalized.selectedSize && 
              item.selectedColor === normalized.selectedColor
          )
          
          if (existingIndex > -1) {
            const newItems = [...state.items]
            newItems[existingIndex].quantity = (newItems[existingIndex].quantity || 1) + (normalized.quantity || 1)
            console.log('addItem: Updated existing item quantity')
            return { items: newItems }
          }
          
          console.log('addItem: Added new item to cart')
          return { 
            items: [...state.items, { ...normalized }] 
          }
        })
      },
      
      removeItem: (id, selectedSize, selectedColor) => {
        console.log('removeItem:', { id, selectedSize, selectedColor })
        set((state) => ({
          items: state.items.filter(
            item => !(item.id === id && 
                    item.selectedSize === selectedSize && 
                    item.selectedColor === selectedColor)
          )
        }))
      },
      
      updateQuantity: (id, quantity, selectedSize, selectedColor) => {
        if (quantity <= 0) {
          get().removeItem(id, selectedSize, selectedColor)
          return
        }
        set((state) => ({
          items: state.items.map(item => {
            if (item.id === id && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor) {
              return { ...item, quantity }
            }
            return item
          })
        }))
      },
      
      clearCart: () => {
        console.log('clearCart: Cart cleared')
        set({ items: [] })
      },
      
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      
      getTotalItems: () => get().items.reduce((total, item) => total + (item.quantity || 1), 0),
      
      getTotalPrice: () => get().items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0),
    }),
    {
      name: 'lambodar-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
)