import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lambodarcreation.com'
  
  const staticPages = [
    { url: baseUrl, lastMod: new Date(), changeFreq: 'weekly', priority: 1 },
    { url: `${baseUrl}/shop`, lastMod: new Date(), changeFreq: 'daily', priority: 0.9 },
    { url: `${baseUrl}/about`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/cart`, lastMod: new Date(), changeFreq: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastMod: new Date(), changeFreq: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, lastMod: new Date(), changeFreq: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/shipping-delivery`, lastMod: new Date(), changeFreq: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/return-refund`, lastMod: new Date(), changeFreq: 'yearly', priority: 0.3 },
  ]

  const categoryPages = [
    { slug: 'trousers', priority: 0.8 },
    { slug: 'satin-shirts', priority: 0.8 },
    { slug: 'printed-shirts', priority: 0.8 },
    { slug: 'short-kurta', priority: 0.7 },
    { slug: 'long-kurta', priority: 0.7 },
  ]

  const categorySitemap = categoryPages.map(cat => ({
    url: `${baseUrl}/shop?category=${cat.slug}`,
    lastMod: new Date(),
    changeFreq: 'daily' as const,
    priority: cat.priority,
  }))

  return [...staticPages, ...categorySitemap]
}