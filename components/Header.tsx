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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-white py-5'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="https://lambodarcreation.com/wp-content/uploads/2023/02/lc_logo-removebg-preview-120x120.png"
              alt="Lambodar Creation"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-primary-900 hover:text-accent transition-colors duration-200 tracking-wide uppercase"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white shadow-xl rounded-sm py-3 min-w-[200px] animate-slide-down">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-5 py-2 text-sm text-primary-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
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

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-primary-900 hover:text-accent transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary-900"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-primary-100 shadow-lg animate-slide-down">
            <div className="container-custom py-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium text-primary-900 py-2"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-2 mt-2 border-l-2 border-primary-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-primary-600 hover:text-primary-900 py-1"
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