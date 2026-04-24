import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Lambodar Creation Terms & Conditions - Understand the rules and guidelines for using our website and services.',
}

export default function TermsConditionsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <Link href="/" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-medium text-primary-900 mb-2">Terms & Conditions</h1>
          <p className="text-primary-500 text-sm mb-8">Last updated: January 2024</p>

          <div className="prose prose-primary max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-primary-600 leading-relaxed">
                By accessing and using the Lambodar Creation website (lambodarcreation.com), you agree to 
                be bound by these Terms and Conditions. If you do not agree to these terms, please do not 
                use our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">2. Website Usage</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe 
                on the rights of others. You must not:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li>Use the website in any way that violates applicable laws</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the website's operation</li>
                <li>Use automated tools to scrape or collect data</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">3. Product Information</h2>
              <p className="text-primary-600 leading-relaxed">
                We strive to display accurate product information, including descriptions, prices, and 
                images. However, we do not guarantee that all information is completely accurate, current, 
                or error-free. Colors may vary due to monitor settings. Products are subject to availability.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">4. Pricing & Payment</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                All prices are in Indian Rupees (₹) and include applicable taxes unless stated otherwise. 
                We reserve the right to change prices without notice. Payment must be received in full before 
                order processing.
              </p>
              <p className="text-primary-600 leading-relaxed">
                We accept Cash on Delivery (COD), Credit/Debit Cards, UPI, and other payment methods 
                as available through our payment partners.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">5. Order Acceptance & Cancellation</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                Your order constitutes an offer to purchase. We reserve the right to accept or reject any 
                order for reasons including:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li>Product unavailability</li>
                <li>Payment verification failure</li>
                <li>Suspicious or fraudulent activity</li>
                <li>Shipping restrictions</li>
              </ul>
              <p className="text-primary-600 leading-relaxed mt-4">
                You can cancel orders within 24 hours of placing them, provided they haven't been shipped.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">6. Intellectual Property</h2>
              <p className="text-primary-600 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the 
                property of Lambodar Creation and protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-primary-600 leading-relaxed">
                Lambodar Creation shall not be liable for any indirect, incidental, special, or consequential 
                damages arising from your use of the website or products. Our total liability shall not exceed 
                the amount you paid for the product in question.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">8. Links to Other Websites</h2>
              <p className="text-primary-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content 
                or practices of these websites. We encourage you to review their terms and privacy policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">9. Governing Law</h2>
              <p className="text-primary-600 leading-relaxed">
                These Terms & Conditions are governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">10. Changes to Terms</h2>
              <p className="text-primary-600 leading-relaxed">
                We reserve the right to modify these Terms & Conditions at any time. Changes will be effective 
                immediately upon posting on the website. Your continued use constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">11. Contact Us</h2>
              <div className="p-4 bg-primary-50">
                <p className="text-primary-900 font-medium">Lambodar Creation</p>
                <p className="text-primary-600 text-sm mt-1">
                  Shop No 02, Vitthal Sadan, Dattaram Lad Marg,<br />
                  Chinchpokli, Mumbai, Maharashtra 400012
                </p>
                <p className="text-primary-600 text-sm mt-1">
                  Email: info@lambodarcreation.com<br />
                  Phone: +91 8657668819
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}