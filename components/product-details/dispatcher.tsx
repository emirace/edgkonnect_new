'use client'

const dispatcherFeatures = [
  'Group and private text',
  'Geofencing capabilities',
  'Member status monitoring',
  'Location services',
  'Call history playback',
  'Multiple groups support',
  'Works on all IP networks',
  'Compatible with Android and Windows'
]

export function Dispatcher() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-[#0080E2]/10 border border-[#0080E2]/30 mb-4">
                <span className="text-sm font-semibold text-[#0080E2] tracking-widest uppercase">Desktop Solution</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#05204A] mb-4">
                Dispatch Console
              </h2>
              <p className="text-lg text-[#05204A]/70 leading-relaxed">
                Large multi-display dispatcher for terminals and wide spaces. Integrated audio input/output with live tracking, satellite view maps, and comprehensive playback history.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#05204A]">Key Features</h3>
              <ul className="grid grid-cols-2 gap-3">
                {dispatcherFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#0080E2] to-[#45D6A8]"></div>
                    <span className="text-[#05204A] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#05204A]/10 to-[#0080E2]/5 rounded-2xl p-8 border border-[#05204A]/10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4031-1Zwb16w9FM5HqFmlmxGD1sl4AsqWLL.png"
                alt="Dispatcher Console"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
