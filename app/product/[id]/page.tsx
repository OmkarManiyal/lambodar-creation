'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Minus, Plus, Truck, RotateCcw, Shield, Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'

const productData: Record<string, any> = {
  'luxury-solid-satin-shirt-1': {
    id: 'luxury-solid-satin-shirt-1',
    name: 'Luxury Solid Satin Shirt',
    price: 599,
    images: [
      'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.49-PM-600x800.jpeg',
      'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.49-PM-1-300x400.jpeg',
      'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.49-PM-2-300x400.jpeg',
    ],
    category: 'Satin Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Elevate your style with our Luxury Solid Satin Shirt. Crafted from premium satin fabric, this shirt offers a smooth, lustrous finish perfect for both casual and formal occasions. The relaxed fit ensures comfort throughout the day.',
    careInstructions: 'Machine wash cold with like colors. Tumble dry low. Iron on low heat if needed.',
  },
  'stylish-printed-shirt-1': {
    id: 'stylish-printed-shirt-1',
    name: 'Stylish Printed Shirt',
    price: 599,
    images: [
      'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.33.22-PM-300x300.jpeg',
      'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.33.21-PM-300x300.jpeg',
    ],
    category: 'Printed Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Make a statement with our Stylish Printed Shirt. Featuring bold, eye-catching prints that reflect the latest fashion trends. Made from high-quality fabric for ultimate comfort and style.',
    careInstructions: 'Machine wash cold inside out. Do not bleach. Hang dry recommended.',
  },
  'premium-beige-trouser': {
    id: 'premium-beige-trouser',
    name: 'Premium Wear Beige Trouser',
    price: 699,
    images: [
      'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.13-PM-1-300x400.jpeg',
    ],
    category: 'Trousers',
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Upgrade your wardrobe with our Premium Wear Beige Trouser. Designed for the modern gentleman who values both style and comfort. Perfect fit guaranteed with our range of sizes.',
    careInstructions: 'Machine wash cold. Tumble dry low. Iron on medium heat.',
  },
}

const relatedProducts = [
  {
    id: '1',
    name: 'Luxury Solid Satin Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.49-PM-2-300x400.jpeg',
    category: 'Satin Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: '2',
    name: 'Luxury Solid Satin Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.49-PM-1-300x400.jpeg',
    category: 'Satin Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: '3',
    name: 'Luxury Solid Satin Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.51-PM-300x400.jpeg',
    category: 'Satin Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: '4',
    name: 'Luxury White Satin Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.48-PM-300x400.jpeg',
    category: 'Satin Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
]

const sizeGuide = {
  'S': { chest: '36-38', length: '27' },
  'M': { chest: '38-40', length: '28' },
  'L': { chest: '40-42', length: '29' },
  'XL': { chest: '42-44', length: '30' },
  'XXL': { chest: '44-46', length: '31' },
  '30': { waist: '30', length: '40' },
  '32': { waist: '32', length: '40' },
  '34': { waist: '34', length: '40' },
  '36': { waist: '36', length: '40' },
  '38': { waist: '38', length: '40' },
}

export default function ProductPage() {
  const params = useParams()
  const { addItem, openCart } = useCart()
  
  const product = productData[params.id as string] || productData['luxury-solid-satin-shirt-1']
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showSizeGuide, setShowSizeGuide] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    
    if (!product.image || product.images?.length === 0) {
      console.warn('ProductPage: Product missing image:', product)
    }
    
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || product.image,
      category: product.category,
      sizes: product.sizes,
    }
    
    addItem(productToAdd, quantity, selectedSize)
    openCart()
  }

  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-primary-500 mb-8">
          <Link href="/">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/shop?category=${product.category.toLowerCase().replace(/\s+/g, '-')}`}>
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-primary-50 overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-primary-50 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary-900' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm text-accent uppercase tracking-wider">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary-900 mt-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl font-medium text-primary-900">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-sm text-primary-500">+ Shipping</span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent fill-accent" />
              ))}
              <span className="text-sm text-primary-500">(0 reviews)</span>
            </div>

            {/* Size Selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium">Size</label>
                <button 
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-sm text-accent hover:text-accent-dark"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-12 border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-primary-900 bg-primary-900 text-white'
                        : 'border-primary-300 hover:border-primary-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              {showSizeGuide && (
                <div className="mt-4 p-4 bg-primary-50 text-sm">
                  <h4 className="font-medium mb-2">Size Guide</h4>
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-primary-500">
                        <th className="pb-2">Size</th>
                        <th className="pb-2">Chest/Waist</th>
                        <th className="pb-2">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizes.map((size: string) => {
                        const guide = sizeGuide[size as keyof typeof sizeGuide] as { chest?: string; waist?: string; length: string } | undefined
                        return (
                          <tr key={size}>
                            <td className="py-1">{size}</td>
                            <td>{(guide?.chest || guide?.waist || '-')}</td>
                            <td>{guide?.length || '-'}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-sm font-medium block mb-3">Quantity</label>
              <div className="flex items-center border border-primary-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-primary-50"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-primary-50"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="btn-primary flex-1 justify-center"
              >
                Add to Cart
              </button>
              <button className="btn-secondary flex-1 justify-center">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-primary-100">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-primary-500">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Easy Returns</p>
                  <p className="text-xs text-primary-500">7 days return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Secure Payment</p>
                  <p className="text-xs text-primary-500">100% secure checkout</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-primary-100">
              <h3 className="font-medium mb-3">Description</h3>
              <p className="text-primary-600 leading-relaxed">{product.description}</p>
              <p className="text-primary-600 leading-relaxed mt-4">
                <strong>Care Instructions:</strong> {product.careInstructions}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-primary-100">
          <h2 className="text-2xl font-serif font-medium text-primary-900 mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-primary-100 p-4 lg:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-primary-500">{product.name}</p>
            <p className="text-lg font-medium">₹{product.price.toLocaleString()}</p>
          </div>
          <button onClick={handleAddToCart} className="btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}