const DUKAAN_API_URL = process.env.NEXT_PUBLIC_DUKAAN_API_URL || 'https://api.dukaan.io/v1'
const DUKAAN_STORE_ID = process.env.NEXT_PUBLIC_DUKAAN_STORE_ID
const DUKAAN_API_KEY = process.env.NEXT_PUBLIC_DUKAAN_API_KEY

interface Product {
  id: string
  name: string
  price: number
  compare_price?: number
  images: string[]
  description?: string
  category?: string
  variants?: {
    id: string
    name: string
    price: number
    stock: number
  }[]
  stock?: number
}

interface CartItem {
  product_id: string
  variant_id?: string
  quantity: number
}

interface Address {
  name: string
  phone: string
  address_line_1: string
  city: string
  state: string
  pincode: string
}

class DukaanAPI {
  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DUKAAN_API_KEY}`,
      'Store-Id': DUKAAN_STORE_ID || '',
    }
  }

  async getProducts(params?: {
    page?: number
    limit?: number
    category?: string
    search?: string
  }): Promise<{ products: Product[]; total: number }> {
    try {
      const queryParams = new URLSearchParams()
      if (params?.page) queryParams.set('page', params.page.toString())
      if (params?.limit) queryParams.set('limit', params.limit.toString())
      if (params?.category) queryParams.set('category', params.category)
      if (params?.search) queryParams.set('search', params.search)

      const response = await fetch(
        `${DUKAAN_API_URL}/products?${queryParams.toString()}`,
        { headers: this.getHeaders() }
      )

      if (!response.ok) throw new Error('Failed to fetch products')
      return response.json()
    } catch (error) {
      console.error('Dukaan API Error:', error)
      return { products: [], total: 0 }
    }
  }

  async getProduct(id: string): Promise<Product | null> {
    try {
      const response = await fetch(
        `${DUKAAN_API_URL}/products/${id}`,
        { headers: this.getHeaders() }
      )

      if (!response.ok) throw new Error('Failed to fetch product')
      return response.json()
    } catch (error) {
      console.error('Dukaan API Error:', error)
      return null
    }
  }

  async createCart(items: CartItem[]): Promise<{ cart_id: string } | null> {
    try {
      const response = await fetch(`${DUKAAN_API_URL}/cart`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ items }),
      })

      if (!response.ok) throw new Error('Failed to create cart')
      return response.json()
    } catch (error) {
      console.error('Dukaan API Error:', error)
      return null
    }
  }

  async getCart(cartId: string): Promise<any | null> {
    try {
      const response = await fetch(
        `${DUKAAN_API_URL}/cart/${cartId}`,
        { headers: this.getHeaders() }
      )

      if (!response.ok) throw new Error('Failed to fetch cart')
      return response.json()
    } catch (error) {
      console.error('Dukaan API Error:', error)
      return null
    }
  }

  async createOrder(order: {
    cart_id: string
    shipping_address: Address
    billing_address?: Address
    payment_method: 'cod' | 'online'
    customer_note?: string
  }): Promise<{ order_id: string; order_number: string } | null> {
    try {
      const response = await fetch(`${DUKAAN_API_URL}/orders`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(order),
      })

      if (!response.ok) throw new Error('Failed to create order')
      return response.json()
    } catch (error) {
      console.error('Dukaan API Error:', error)
      return null
    }
  }

  async getOrder(orderId: string): Promise<any | null> {
    try {
      const response = await fetch(
        `${DUKAAN_API_URL}/orders/${orderId}`,
        { headers: this.getHeaders() }
      )

      if (!response.ok) throw new Error('Failed to fetch order')
      return response.json()
    } catch (error) {
      console.error('Dukaan API Error:', error)
      return null
    }
  }

  async getPaymentLink(amount: number, orderId: string): Promise<string | null> {
    try {
      const response = await fetch(`${DUKAAN_API_URL}/payments/link`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          amount,
          order_id: orderId,
          currency: 'INR',
        }),
      })

      if (!response.ok) throw new Error('Failed to create payment link')
      const data = await response.json()
      return data.payment_url
    } catch (error) {
      console.error('Dukaan API Error:', error)
      return null
    }
  }
}

export const dukaan = new DukaanAPI()
export type { Product, CartItem, Address }