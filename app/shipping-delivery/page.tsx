import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Truck, Clock, MapPin, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Delivery',
  description: 'Lambodar Creation Shipping & Delivery Policy - Learn about our delivery timelines, shipping charges, and order tracking.',
}

export default function ShippingDeliveryPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <Link href="/" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-medium text-primary-900 mb-2">Shipping & Delivery</h1>
          <p className="text-primary-500 text-sm mb-8">Last updated: January 2024</p>

          <div className="prose prose-primary max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">1. Delivery Timelines</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                We aim to deliver your orders as quickly as possible. Here are our standard delivery timelines:
              </p>
              <div className="bg-primary-50 p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-primary-900">Metro Cities</h3>
                    <p className="text-primary-600 text-sm">3-5 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-primary-900">Tier 2 Cities</h3>
                    <p className="text-primary-600 text-sm">5-7 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-primary-900">Other Areas</h3>
                    <p className="text-primary-600 text-sm">7-10 business days</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">2. Shipping Charges</h2>
              <div className="space-y-4 text-primary-600">
                <p>
                  <strong>Free Shipping:</strong> We offer FREE shipping on all orders above ₹999 within India.
                </p>
                <p>
                  <strong>Standard Shipping:</strong> A flat fee of ₹50 applies to orders below ₹999.
                </p>
                <p>
                  <strong>Express Delivery:</strong> Available at additional charges. Contact us for express shipping options.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">3. Order Processing Time</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                Orders are typically processed within 1-2 business days. During peak seasons or sales, 
                processing may take longer. You will receive a confirmation email once your order is shipped.
              </p>
              <div className="flex items-center gap-3 p-4 bg-primary-50">
                <Clock className="w-5 h-5 text-accent" />
                <p className="text-sm text-primary-600">
                  <strong>Note:</strong> Orders placed after 2 PM IST will be processed the next business day.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">4. Order Tracking</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                Once your order is shipped, you will receive:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li>Tracking number via email and SMS</li>
                <li>Direct link to track your shipment</li>
                <li>Real-time updates on delivery status</li>
              </ul>
              <p className="text-primary-600 leading-relaxed mt-4">
                You can also track your order by contacting our support team on WhatsApp.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">5. Shipping Restrictions</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                We currently ship to most locations across India. Some remote areas may have extended 
                delivery times. International shipping is available for select countries - contact us 
                for details.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">6. Delivery Delay Handling</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                While we strive for timely delivery, delays may occur due to:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li>Weather conditions</li>
                <li>Local holidays</li>
                <li>Logistics disruptions</li>
                <li>Custom clearance (for international orders)</li>
              </ul>
              <p className="text-primary-600 leading-relaxed mt-4">
                If your order is delayed beyond the estimated timeframe, please contact us and we will 
                work with our shipping partners to resolve the issue.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">7. Delivery Instructions</h2>
              <p className="text-primary-600 leading-relaxed">
                Please ensure someone is available to receive the package at the delivery address. 
                Our delivery partners may contact you for delivery confirmation. For any special 
                delivery instructions, please mention them during checkout or contact us directly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">8. Contact Us</h2>
              <div className="p-4 bg-primary-50">
                <p className="text-primary-600">
                  For shipping-related queries, reach out to us:
                </p>
                <p className="text-primary-600 text-sm mt-2">
                  <strong>WhatsApp:</strong> +91 8657668819<br />
                  <strong>Email:</strong> info@lambodarcreation.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}