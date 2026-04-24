'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Filter, X, ChevronDown } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { ProductData } from '@/lib/product'

const allProducts: ProductData[] = [
  {
    id: 'stylish-printed-shirt-1',
    name: 'Stylish Printed Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.33.22-PM-300x300.jpeg',
    category: 'Printed Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'luxury-solid-satin-shirt-1',
    name: 'Luxury Solid Satin Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.49-PM-300x300.jpeg',
    category: 'Satin Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'premium-beige-trouser',
    name: 'Premium Wear Beige Trouser',
    price: 699,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.13-PM-1-300x400.jpeg',
    category: 'Trousers',
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'premium-black-trouser',
    name: 'Premium Wear Black Trouser',
    price: 699,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.12-PM-300x400.jpeg',
    category: 'Trousers',
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'premium-blue-trouser',
    name: 'Premium Wear Blue Trouser',
    price: 699,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.11-PM-1-600x800.jpeg',
    category: 'Trousers',
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'premium-brown-trouser',
    name: 'Premium Wear Brown Trouser',
    price: 699,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.12-PM-1-300x400.jpeg',
    category: 'Trousers',
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'premium-khaki-trouser',
    name: 'Premium Wear Khaki Trouser',
    price: 699,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.14-PM-300x400.jpeg',
    category: 'Trousers',
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'premium-white-trouser',
    name: 'Premium Wear White Trouser',
    price: 699,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.13-PM-300x400.jpeg',
    category: 'Trousers',
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'luxury-white-satin-shirt',
    name: 'Luxury White Satin Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.48-PM-300x400.jpeg',
    category: 'Satin Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
]

const categories = [
  { name: 'All', slug: '' },
  { name: 'Trousers', slug: 'trousers' },
  { name: 'Satin Shirts', slug: 'satin-shirts' },
  { name: 'Printed Shirts', slug: 'printed-shirts' },
  { name: 'Short Kurta', slug: 'short-kurta' },
  { name: 'Long Kurta', slug: 'long-kurta' },
]

const sortOptions = [
  { name: 'Default', value: 'default' },
  { name: 'Price: Low to High', value: 'price-asc' },
  { name: 'Price: High to Low', value: 'price-desc' },
  { name: 'Newest', value: 'newest' },
]

const priceRanges = [
  { name: 'All', min: 0, max: Infinity },
  { name: 'Under ₹500', min: 0, max: 500 },
  { name: '₹500 - ₹700', min: 500, max: 700 },
  { name: 'Above ₹700', min: 700, max: Infinity },
]

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') || ''
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [sortBy, setSortBy] = useState(sortOptions[0])
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = !selectedCategory || 
      (product.category && product.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory)
    const priceMatch = product.price >= selectedPriceRange.min && 
      product.price < selectedPriceRange.max
    return categoryMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy.value) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      default:
        return 0
    }
  })

  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary-900">
            {selectedCategory 
              ? categories.find(c => c.slug === selectedCategory)?.name || 'Shop'
              : 'All Products'
            }
          </h1>
          <p className="text-primary-600 mt-2">
            {sortedProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                        selectedCategory === cat.slug
                          ? 'bg-primary-100 text-primary-900 font-medium'
                          : 'text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.name}
                      onClick={() => setSelectedPriceRange(range)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                        selectedPriceRange.name === range.name
                          ? 'bg-primary-100 text-primary-900 font-medium'
                          : 'text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-primary-100">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-sm font-medium"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>

              <div className="flex flex-wrap items-center gap-4">
                {/* Mobile Filters */}
                {showFilters && (
                  <div className="absolute lg:hidden top-full left-0 right-0 bg-white shadow-lg z-10 p-4 border-t border-primary-100">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <button
                            key={cat.slug}
                            onClick={() => {
                              setSelectedCategory(cat.slug)
                              setShowFilters(false)
                            }}
                            className={`px-3 py-1 text-sm border transition-colors ${
                              selectedCategory === cat.slug
                                ? 'border-primary-900 bg-primary-900 text-white'
                                : 'border-primary-200 hover:border-primary-900'
                            }`}
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Price Range</h3>
                      <div className="flex flex-wrap gap-2">
                        {priceRanges.map((range) => (
                          <button
                            key={range.name}
                            onClick={() => setSelectedPriceRange(range)}
                            className={`px-3 py-1 text-sm border transition-colors ${
                              selectedPriceRange.name === range.name
                                ? 'border-primary-900 bg-primary-900 text-white'
                                : 'border-primary-200 hover:border-primary-900'
                            }`}
                          >
                            {range.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy.value}
                  onChange={(e) => {
                    const option = sortOptions.find(o => o.value === e.target.value)
                    if (option) setSortBy(option)
                  }}
                  className="appearance-none bg-white border border-primary-200 px-4 py-2 pr-10 text-sm focus:outline-none focus:border-primary-900"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-primary-500" />
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-primary-600">No products found in this category.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('')
                    setSelectedPriceRange(priceRanges[0])
                  }}
                  className="mt-4 text-sm text-accent hover:text-accent-dark font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="pt-28 pb-20"><div className="container-custom">Loading...</div></div>}>
      <ShopContent />
    </Suspense>
  )
}