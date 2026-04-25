'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Eye, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    category?: string
    sizes?: string[]
    description?: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!product.image) {
      console.warn('ProductCard: Product missing image:', product)
    }
    
    const size = selectedSize || product.sizes?.[1] || 'M'
    
    const productData = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      sizes: product.sizes,
    }
    
    addItem(productData, 1, size)
    openCart()
  }

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-3">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
            <span className="text-neutral-400 text-xs">No Image</span>
          </div>
        )}
        
        <div 
          className={`absolute inset-0 bg-neutral-900/30 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="p-2.5 bg-white rounded-full hover:bg-brand-500 hover:text-white transition-colors duration-300"
            aria-label="Quick add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
          <button
            className="p-2.5 bg-white rounded-full hover:bg-brand-500 hover:text-white transition-colors duration-300"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute top-3 left-3 badge-new">
          New
        </div>
      </div>

      <div>
        {product.category && (
          <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
            {product.category}
          </p>
        )}
        <h3 className="text-sm font-medium text-neutral-800 group-hover:text-brand-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-neutral-900 mt-1">
          ₹{product.price.toLocaleString()}
        </p>
        
        {product.sizes && (
          <div 
            className={`flex gap-1 mt-2 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={(e) => e.preventDefault()}
          >
            {product.sizes.slice(0, 4).map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setSelectedSize(size)
                }}
                className={`w-7 h-7 text-xs font-medium border transition-colors duration-200 ${
                  selectedSize === size
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-neutral-200 hover:border-neutral-800'
                }`}
              >
                {size}
              </button>
            ))}
            {product.sizes.length > 4 && (
              <span className="w-7 h-7 flex items-center justify-center text-xs text-neutral-400">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}