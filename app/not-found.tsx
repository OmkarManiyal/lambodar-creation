import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-8xl font-serif font-medium text-primary-200">404</h1>
        <h2 className="text-2xl font-medium text-primary-900 mt-4">Page Not Found</h2>
        <p className="text-primary-600 mt-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link href="/" className="btn-primary inline-flex">
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
          <Link href="/" className="btn-secondary inline-flex">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  )
}