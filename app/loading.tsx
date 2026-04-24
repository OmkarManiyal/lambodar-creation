export default function Loading() {
  return (
    <div className="pt-28 pb-20 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-primary-900 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-primary-600 mt-4">Loading...</p>
      </div>
    </div>
  )
}