import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, Clock, CreditCard, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Return & Refund Policy',
  description: 'Lambodar Creation Return & Refund Policy - Learn about our 7-day return policy, refund processing, and eligibility criteria.',
}

export default function ReturnRefundPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <Link href="/" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-medium text-primary-900 mb-2">Return & Refund Policy</h1>
          <p className="text-primary-500 text-sm mb-8">Last updated: January 2024</p>

          <div className="prose prose-primary max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">1. Return Window</h2>
              <div className="bg-primary-50 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900">7 Days Return Policy</h3>
                    <p className="text-primary-600 text-sm">
                      All unused items can be returned within 7 days of delivery
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">2. Eligibility Criteria</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                To be eligible for a return, please ensure:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li>Item is unused, unworn, and unwashed</li>
                <li>Original tags are attached</li>
                <li>Original packaging is intact</li>
                <li>Return request is initiated within 7 days of delivery</li>
                <li>Proof of purchase (order confirmation) is available</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">3. Items Not Eligible for Return</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                The following items cannot be returned:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li>Customized or personalized items</li>
                <li>Innerwear and accessories (if hygienic seal is broken)</li>
                <li>Items marked as "Non-Returnable" on product page</li>
                <li>Items that have been used, altered, or damaged by customer</li>
                <li>Sale/clearance items (unless defective)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">4. How to Initiate a Return</h2>
              <div className="space-y-4">
                <p className="text-primary-600 leading-relaxed">
                  To initiate a return, please follow these steps:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900">Contact Us</h4>
                      <p className="text-primary-600 text-sm">
                        Reach out via WhatsApp (+91 8657668819) or email with your order ID and reason for return.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900">Get Approval</h4>
                      <p className="text-primary-600 text-sm">
                        Our team will review your request and provide a return authorization within 24-48 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900">Ship the Item</h4>
                      <p className="text-primary-600 text-sm">
                        Pack the item securely and ship it back to our address. We'll provide the return shipping label.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">5. Refund Process</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-primary-50">
                  <CreditCard className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary-900">Refund Timeline</h3>
                    <p className="text-primary-600 text-sm mt-1">
                      Refunds are processed within 5-7 business days after we receive and inspect the returned item.
                    </p>
                  </div>
                </div>
                <p className="text-primary-600 leading-relaxed">
                  <strong>Refund Method:</strong> Refunds will be credited to the original payment method used during purchase.
                </p>
                <ul className="list-disc list-inside text-primary-600 space-y-2">
                  <li><strong>COD Orders:</strong> Refund via bank transfer or store credit</li>
                  <li><strong>Online Payments:</strong> Refund to original payment method</li>
                  <li><strong>Store Credit:</strong> Instant credit to your Lambodar Creation account</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">6. Exchange Policy</h2>
              <p className="text-primary-600 leading-relaxed">
                We offer size exchanges subject to availability. If you'd like to exchange for a different size 
                or color, please indicate this when contacting us. The new item will be shipped once we receive 
                the original item.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">7. Damaged/Defective Items</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                If you receive a damaged or defective item, please contact us immediately with photos of the 
                damaged product and packaging. We will arrange for a replacement or full refund at no extra cost.
              </p>
              <div className="p-4 border border-accent/30 bg-accent/5">
                <p className="text-sm text-primary-600">
                  <strong>Note:</strong> Claims for damaged items must be reported within 48 hours of delivery.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">8. Return Shipping</h2>
              <div className="bg-primary-50 p-6">
                <div className="flex items-start gap-4">
                  <Package className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-primary-900">Return Shipping Charges</h3>
                    <ul className="text-primary-600 text-sm mt-2 space-y-1">
                      <li>• Free returns for defective/wrong items</li>
                      <li>• ₹50 deduction for change of mind returns</li>
                      <li>• Free pickup from your location (select cities)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">9. Contact Us</h2>
              <div className="p-4 bg-primary-50">
                <p className="text-primary-600">
                  For return-related queries:
                </p>
                <p className="text-primary-600 text-sm mt-2">
                  <strong>WhatsApp:</strong> +91 8657668819<br />
                  <strong>Email:</strong> info@lambodarcreation.com<br />
                  <strong>Hours:</strong> Mon-Sat, 10 AM - 8 PM IST
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}