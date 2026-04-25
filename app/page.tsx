'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Headphones, Shield, Star } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

const collections = [
  {
    name: 'Trousers',
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.11-PM-1-600x800.jpeg',
    count: 6,
    href: '/shop?category=trousers'
  },
  {
    name: 'Satin Shirts',
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.50-PM-600x800.jpeg',
    count: 8,
    href: '/shop?category=satin-shirts'
  },
  {
    name: 'Printed Shirts',
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.33.20-PM-600x800.jpeg',
    count: 8,
    href: '/shop?category=printed-shirts'
  },
  {
    name: 'Short Kurta',
    image: 'https://lambodarcreation.com/wp-content/uploads/woocommerce-placeholder-300x300.png',
    count: 0,
    href: '/shop?category=short-kurta'
  },
  {
    name: 'Long Kurta',
    image: 'https://lambodarcreation.com/wp-content/uploads/woocommerce-placeholder-300x300.png',
    count: 0,
    href: '/shop?category=long-kurta'
  },
]

const featuredProducts = [
  {
    id: '1',
    name: 'Stylish Printed Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.33.22-PM-300x300.jpeg',
    category: 'Printed Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '2',
    name: 'Luxury Solid Satin Shirt',
    price: 599,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.49-PM-300x300.jpeg',
    category: 'Satin Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: '3',
    name: 'Premium Wear Trouser',
    price: 699,
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-10.32.13-PM-300x400.jpeg',
    category: 'Trousers',
    sizes: ['30', '32', '34', '36', '38'],
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

const testimonials = [
  {
    name: 'Vishakha Tandalekar',
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/07/VISHAKA.png',
    text: "Lambodar Creation offers high-quality ethnic and contemporary men's wear with stylish designs and premium fabrics. Their clothing is durable, comfortable, and reasonably priced. Excellent customer service ensures a smooth and satisfying shopping experience.",
    rating: 4.5,
  },
  {
    name: 'Ganesh Kharatmol',
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/07/unnamed.png',
    text: "In first 10 mins of check in we've loved it such a great ambiance and atmosphere, well cleaned bathrooms, floors, beds, 5 Of 5. Staffs are so humbled, in this much cheap rate you can't find this much experience in alibaug.",
    rating: 5,
  },
  {
    name: 'Abhishek Patil',
    image: 'https://lambodarcreation.com/wp-content/uploads/2025/07/ABHI.png',
    text: "Good experience with whole team. Very nice collection with lots of colour and size options. Just keep one thing in mind if you like any of their products just hurry up otherwise they get out of stock really quick.",
    rating: 5,
  },
]

const features = [
  {
    icon: Truck,
    title: 'Swift, Safe, Seamless!',
    description: 'Fast and reliable delivery across India',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support 24/7',
    description: 'Always here to help you',
  },
  {
    icon: Shield,
    title: 'Money Back Guarantee',
    description: 'Quality you can trust',
  },
]

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-warm-50" />
        <div className="container-custom relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl animate-fade-in">
              <span className="inline-block text-brand-600 text-xs font-medium tracking-[0.2em] uppercase mb-4">
                New Collection Live Now
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-neutral-900 leading-tight text-balance">
                Shop the Latest Trends Today!
              </h1>
              <p className="text-neutral-500 mt-5 max-w-lg leading-relaxed">
                Explore our curated collection and stay ahead of the fashion curve. 
                Shop the latest trends at your fingertips.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/shop" className="btn-primary">
                  Shop New Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="https://lambodarcreation.com/wp-content/uploads/2023/12/glasses-category-img-2.jpg"
                  alt="Fashion collection showcase"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40">
                <Image
                  src="https://lambodarcreation.com/wp-content/uploads/2024/02/e0cb6e9d-image1.png"
                  alt="Featured shirt"
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-soft-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-neutral-900 text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{feature.title}</h3>
                  <p className="text-xs text-neutral-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-14 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Collections</h2>
            <p className="section-subtitle mx-auto">
              Discover our curated categories of premium men's fashion
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {collections.map((collection) => (
              <Link
                key={collection.name}
                href={collection.href}
                className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 card-hover"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-medium text-sm">{collection.name}</h3>
                  <p className="text-xs text-white/80 mt-0.5">
                    {collection.count > 0 ? `${collection.count} Products` : 'Coming Soon'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">
                Handpicked pieces for the modern gentleman
              </p>
            </div>
            <Link href="/shop" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors flex items-center gap-2">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story CTA */}
      <section className="py-14 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative aspect-square bg-neutral-100 overflow-hidden">
              <Image
                src="https://lambodarcreation.com/wp-content/uploads/2024/02/1ef2fbe2-image.png"
                alt="Lambodar Creation brand story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-brand-600 text-xs font-medium tracking-[0.2em] uppercase">
                Our Story
              </span>
              <h2 className="section-title mt-3">
                Quality You Can Trust
              </h2>
              <p className="text-neutral-500 mt-5 leading-relaxed">
                Founded in December 2019, Lambodar Creation began as a passion project 
                by three friends who dared to dream beyond their regular jobs. Despite 
                the challenges of COVID-19, we emerged stronger, establishing ourselves 
                as a trusted brand for fit-focused basics.
              </p>
              <p className="text-neutral-500 mt-4 leading-relaxed">
                Over the past 5 years, we've served customers across India and beyond, 
                known for our consistent quality and long-term customer relationships. 
                Every piece we create reflects our commitment to excellence.
              </p>
              <Link href="/about" className="btn-primary mt-8">
                Know More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-medium">
              Our Happy Clients!
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-neutral-800 p-6 md:p-7 rounded-lg"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(testimonial.rating) 
                          ? 'text-brand-400 fill-brand-400' 
                          : 'text-neutral-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-5">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-700">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-sm">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-medium text-neutral-900">
              Stay in Style
            </h2>
            <p className="text-neutral-500 mt-2 text-sm">
              Subscribe to get exclusive offers, new arrivals, and style tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 mt-5 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input-field flex-1"
                required
              />
              <button type="submit" className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}