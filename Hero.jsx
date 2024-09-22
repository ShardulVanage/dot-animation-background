import AnimatedBackground from './dual-animated-background'

export default function HomePage() {
  return (
    <main>
      <AnimatedBackground 
        className="min-h-screen bg-gray-100" 
        dotColor="#3B82F6" 
        animationType="convex"
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Convex Animation
          </h1>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl max-w-2xl">
            This section uses the convex (magnifying lens) animation effect.
          </p>
        </div>
      </AnimatedBackground>

      <AnimatedBackground 
        className="min-h-screen bg-white" 
        dotColor="#10B981" 
        animationType="concave"
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Concave Animation
          </h1>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl max-w-2xl">
            This section uses the concave (scattering) animation effect.
          </p>
        </div>
      </AnimatedBackground>
    </main>
  )
}
