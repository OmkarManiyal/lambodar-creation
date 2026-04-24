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
      <div className="relative aspect-[3/4] bg-primary-50 overflow-hidden mb-4">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-primary-100">
            <span className="text-primary-400 text-sm">No Image</span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="p-3 bg-white rounded-full hover:bg-accent hover:text-white transition-colors"
            aria-label="Quick add to cart"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            className="p-3 bg-white rounded-full hover:bg-accent hover:text-white transition-colors"
            aria-label="Quick view"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Sale Badge */}
        <div className="absolute top-3 left-3 bg-accent text-white text-xs font-medium px-3 py-1 uppercase">
          New
        </div>
      </div>

      <div>
        {product.category && (
          <p className="text-xs text-primary-500 uppercase tracking-wider mb-1">
            {product.category}
          </p>
        )}
        <h3 className="text-sm font-medium text-primary-900 group-hover:text-accent transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-primary-900 font-medium">
            ₹{product.price.toLocaleString()}
          </span>
        </div>
        
        {/* Size Options */}
        {product.sizes && (
          <div 
            className={`flex gap-1 mt-3 transition-opacity duration-300 ${
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
                className={`w-8 h-8 text-xs font-medium border transition-colors ${
                  selectedSize === size
                    ? 'border-accent bg-accent text-white'
                    : 'border-primary-300 hover:border-primary-900'
                }`}
              >
                {size}
              </button>
            ))}
            {product.sizes.length > 4 && (
              <span className="w-8 h-8 text-xs flex items-center justify-center text-primary-500">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}