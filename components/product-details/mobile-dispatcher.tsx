'use client'

const mobileFeatures = [
  'Group and private audio',
  'Group and private text',
  'Member status visibility',
  'Location tracking',
  'Call history playback',
  'Multiple groups support',
  'Works on all IP networks'
]

export function MobileDispatcher() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-[#0080E2]/10 border border-[#0080E2]/30 mb-4">
                <span className="text-sm font-semibold text-[#0080E2] tracking-widest uppercase">Mobile Solution</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#05204A] mb-4">
                Mobile App Dispatcher
              </h2>
              <p className="text-lg text-[#05204A]/70 leading-relaxed">
                Full-featured Android dispatcher compatible with any 2.3+ device. Works seamlessly over 2G, 3G, 4G/LTE, WiFi, and wired connections.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold text-[#05204A]">Key Features</h3>
              <ul className="space-y-3">
                {mobileFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#0080E2] to-[#45D6A8] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#05204A]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#05204A]/10 to-[#0080E2]/5 rounded-2xl p-8 border border-[#05204A]/10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4030-bMGSlRdKdRdM5Qqtx9S8nVOIdFasBk.png"
                alt="Mobile Dispatcher App"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
