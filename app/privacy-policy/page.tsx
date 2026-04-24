import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Lambodar Creation Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <Link href="/" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-medium text-primary-900 mb-2">Privacy Policy</h1>
          <p className="text-primary-500 text-sm mb-8">Last updated: January 2024</p>

          <div className="prose prose-primary max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">1. Who We Are</h2>
              <p className="text-primary-600 leading-relaxed">
                Our website address is: https://lambodarcreation.com. Lambodar Creation is a premium 
                menswear brand offering ethnic and contemporary clothing. We are committed to protecting 
                your privacy and personal information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">2. Information We Collect</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, postal address</li>
                <li><strong>Payment Information:</strong> Payment method details (processed securely through payment gateways)</li>
                <li><strong>Order Information:</strong> Products ordered, order history, preferences</li>
                <li><strong>Device Information:</strong> IP address, browser type, device identifiers</li>
                <li><strong>Cookies:</strong> Usage data to improve your browsing experience</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and inquiries</li>
                <li>Send promotional updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">4. Data Protection and Security</h2>
              <p className="text-primary-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. This includes 
                SSL encryption, secure servers, and regular security assessments.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">5. Third-Party Services</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                We use third-party services for:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li><strong>Dukaan.io:</strong> E-commerce platform for product management and checkout</li>
                <li><strong>Payment Gateways:</strong> Secure payment processing (Razorpay, Paytm, etc.)</li>
                <li><strong>Shipping Partners:</strong> Delivering your orders</li>
                <li><strong>Analytics:</strong> Understanding website usage patterns</li>
              </ul>
              <p className="text-primary-600 leading-relaxed mt-4">
                These services have their own privacy policies. We encourage you to review them.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">6. Cookies Usage</h2>
              <p className="text-primary-600 leading-relaxed">
                We use cookies to enhance your browsing experience, remember your preferences, and 
                understand how you use our website. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">7. Your Rights</h2>
              <p className="text-primary-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-primary-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-medium text-primary-900 mb-4">8. Contact Us</h2>
              <p className="text-primary-600 leading-relaxed">
                If you have any questions about this Privacy Policy or want to exercise your rights, 
                contact us at:
              </p>
              <div className="mt-4 p-4 bg-primary-50">
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