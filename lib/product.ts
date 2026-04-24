export interface CartProduct {
  id: string
  name: string
  price: number
  image: string
  category?: string
  selectedSize?: string
  selectedColor?: string
  quantity?: number
  sizes?: string[]
  description?: string
}

export interface ProductData {
  id: string
  name: string
  price: number
  image: string
  category?: string
  sizes?: string[]
  description?: string
}

export function normalizeProduct(product: any): CartProduct {
  if (!product) {
    console.warn('normalizeProduct: received null/undefined product')
    return null as any
  }

  const normalized: CartProduct = {
    id: product.id || '',
    name: product.name || 'Unknown Product',
    price: typeof product.price === 'number' ? product.price : 0,
    image: 
      product.image ||
      product.images?.[0] ||
      product.thumbnail ||
      '',
    category: product.category || '',
    selectedSize: product.selectedSize || product.size || '',
    selectedColor: product.selectedColor || product.color || '',
    quantity: typeof product.quantity === 'number' && product.quantity > 0 ? product.quantity : 1,
    sizes: product.sizes || [],
    description: product.description || '',
  }

  if (!normalized.image) {
    console.warn('normalizeProduct: Product missing image field:', { id: normalized.id, name: normalized.name })
  }

  if (!normalized.id) {
    console.warn('normalizeProduct: Product missing id:', product)
  }

  return normalized
}

export function validateCartProduct(product: CartProduct): boolean {
  const errors: string[] = []

  if (!product.id) errors.push('Missing id')
  if (!product.name) errors.push('Missing name')
  if (typeof product.price !== 'number' || product.price <= 0) errors.push('Invalid price')
  if (!product.image) errors.push('Missing image')

  if (errors.length > 0) {
    console.warn('validateCartProduct: Invalid product:', errors, product)
    return false
  }

  return true
}

export function createCartProduct(
  id: string,
  name: string,
  price: number,
  image: string,
  options?: {
    category?: string
    selectedSize?: string
    selectedColor?: string
    quantity?: number
    sizes?: string[]
    description?: string
  }
): CartProduct {
  return normalizeProduct({
    id,
    name,
    price,
    image,
    ...options,
  })
}