'use client'

const adminFeatures = [
  'Add and remove users',
  'Create and manage groups',
  'Mass provisioning',
  'Mass removal',
  'Check group status',
  'View user profiles',
  'Track devices'
]

export function WebAdmin() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05204A] to-[#0a3d6b]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4031-1Zwb16w9FM5HqFmlmxGD1sl4AsqWLL.png"
                alt="Web Admin Interface"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
                <span className="text-sm font-semibold text-[#45D6A8] tracking-widest uppercase">Administration</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Web Admin Portal
              </h2>
              <p className="text-lg text-[#CAF0F8]/80 leading-relaxed">
                Centralized administration platform for provisioning and managing all your devices. Supports both manual and automated (SOAP protocol) activation with user-friendly interface.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold text-white">Key Features</h3>
              <ul className="space-y-3">
                {adminFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#45D6A8] flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#05204A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#CAF0F8]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
