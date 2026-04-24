import { CartProduct } from '@/lib/product'

export function generateProductSchema(product: CartProduct) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [product.image],
    description: product.description || `${product.name} - Premium quality ${(product.category || 'clothing').toLowerCase()} from Lambodar Creation`,
    brand: {
      '@type': 'Brand',
      name: 'Lambodar Creation',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      merchantName: 'Lambodar Creation',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lambodar Creation',
    url: 'https://lambodarcreation.com',
    logo: 'https://lambodarcreation.com/wp-content/uploads/2023/02/lc_logo-removebg-preview-120x120.png',
    description: 'Premium ethnic and contemporary menswear brand',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No 02, Vitthal Sadan, Dattaram Lad Marg',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400012',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8657668819',
      contactType: 'customer service',
      email: 'info@lambodarcreation.com',
    },
    sameAs: [
      'https://www.instagram.com/lambodar_creation_official/',
      'https://www.facebook.com/lambodarcreation/',
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}