'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Shop', 
    href: '/shop',
    children: [
      { name: 'All Products', href: '/shop' },
      { name: 'Trousers', href: '/shop?category=trousers' },
      { name: 'Satin Shirts', href: '/shop?category=satin-shirts' },
      { name: 'Printed Shirts', href: '/shop?category=printed-shirts' },
      { name: 'Short Kurta', href: '/shop?category=short-kurta' },
      { name: 'Long Kurta', href: '/shop?category=long-kurta' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const { toggleCart, getTotalItems } = useCart()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const cartCount = mounted ? getTotalItems() : 0

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' 
          : 'bg-white py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src="https://lambodarcreation.com/wp-content/uploads/2023/02/lc_logo-removebg-preview-120x120.png"
              alt="Lambodar Creation"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors duration-200 tracking-wide uppercase"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white shadow-soft-lg rounded py-2 min-w-[180px] animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-5 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={toggleCart}
              className="relative p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-soft-lg animate-fade-in">
            <div className="container-custom py-5">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm font-medium text-neutral-700 py-3 hover:text-neutral-900"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 border-l border-neutral-200 ml-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-neutral-500 py-2 hover:text-neutral-900"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}