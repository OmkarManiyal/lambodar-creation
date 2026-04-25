import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'Trousers', href: '/shop?category=trousers' },
    { name: 'Satin Shirts', href: '/shop?category=satin-shirts' },
    { name: 'Printed Shirts', href: '/shop?category=printed-shirts' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Our Story', href: '/about#story' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'Shipping & Delivery', href: '/shipping-delivery' },
    { name: 'Return & Refund', href: '/return-refund' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="https://lambodarcreation.com/wp-content/uploads/2023/02/lc_logo-removebg-preview-120x120.png"
                  alt="Lambodar Creation Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="(max-width: 640px) 64px, 80px"
                />
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Discover premium ethnic and contemporary men's wear. 
              Quality fabrics, modern designs, and timeless style since 2019.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/lambodar_creation_official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 hover:bg-brand-600 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/lambodarcreation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 hover:bg-brand-600 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400 text-xs">
                  Shop No 02, Vitthal Sadan, Dattaram Lad Marg, Chinchpokli, Mumbai, Maharashtra 400012
                </span>
              </li>
              <li>
                <a 
                  href="mailto:info@lambodarcreation.com"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-brand-400" />
                  info@lambodarcreation.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918657668819"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-brand-400" />
                  +91 8657668819
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-neutral-500 text-xs">
              Copyright {currentYear} | Lambodar Creation. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-neutral-500 hover:text-white text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}